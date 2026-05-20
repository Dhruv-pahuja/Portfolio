import React from "react";
import { Link } from "lucide-react";
import lifestackImg from "../assets/lifestack.png";
import shopnex from "../assets/shopnex.png";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "HireNex",
    description:
      "HireNex is a full-stack MERN job portal that enables recruiters to post jobs and manage applicants while allowing candidates to explore opportunities and apply seamlessly through a modern, responsive platform.",
    image: "/path/to/hirenex.jpg",
    tags: ["REACT.JS", "NODE.JS", "EXPRESS.JS", "MONGODB", "TAILWIND CSS", "JAVASCRIPT", "RESTFUL API","JWT"],
    link: "https://example.com/hirenex",
  },
  {
    id: 2,
    title: "LifeStack - Integrated personal dashboard",
    description:
      "LifeStack is a full-stack productivity and management platform that helps users organize tasks, store documents, and manage workflows through a secure and responsive web application.",
    image: lifestackImg,
    tags: ["REACT.JS", "NODE.JS", "EXPRESS.JS", "MONGODB", "TAILWIND CSS", "JAVASCRIPT", "Cloudinary", "JWT","RESTFUL API"],
    link: "https://example.com/lifestack",
  },
  {
    id: 3,
    title: "ShopNex - E-commerce platform",
    description:
      "ShopNex is a next-generation MERN e-commerce platform focused on smart shopping experiences, modern UI/UX, real-time order workflows, and scalable store management for both customers and sellers.",
    image: shopnex,
    tags: ["REACT.JS", "NODE.JS", "EXPRESS.JS", "MONGODB", "TAILWIND CSS", "JAVASCRIPT", "RESTFUL API","Redux"],
    link: "https://example.com/shopnex",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100 dark:bg-black min-h-[80vh]" id="portfolio">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          My Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg bg-white dark:bg-black dark:border transform transition-transform duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 relative">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                  {project.title}
                  <Link className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100" />
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
