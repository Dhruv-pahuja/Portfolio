import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "ShandCn Ui",
  "MongoDB",
  "Redux",
  "Appwrite",
  "Python",
  "MySQL",
  "Django",
  "Django REST Framework",
  "Git",
  "Docker",
];

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen mt-5 md:mt-0 flex flex-col items-center justify-center px-6 bg-gray-100 dark:bg-black text-gray-800 dark:text-white"
    >
      <div className="max-w-5xl w-full text-center">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10 w-full">
        <div className="w-1/3 h-70 rounded-lg overflow-hidden border-4 border-gray-300 dark:border-gray-700">
            <img
              src="public/developer.webp" 
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3 flex flex-col md:self-start">
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-[#ff2655]">Ab</span>o<span className="text-[#ff2655]">u</span>t M
              <span className="text-[#ff2655]">e</span>
            </h1>
            <p className="md:text-xl leading-relaxed text-base ">
                I'm a Full Stack Developer with a passion for building beautiful and functional websites. I have experience in building web applications using modern technologies like React, Next.js, Node.js, and MongoDB. I love to learn new things and explore new technologies. I'm always open to new opportunities and challenges.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ amount: 0.2 }} 
            transition={{ staggerChildren: 0.1 }} 
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }, 
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white py-2 px-4 rounded-lg shadow-md font-medium"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
