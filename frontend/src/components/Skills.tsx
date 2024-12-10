import React from 'react';
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


const Skills:React.FC = () => {
    return (
        <div>
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
    );
}

export default Skills;
