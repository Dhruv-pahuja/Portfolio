import React from "react";
import { Link } from "lucide-react";

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
    title: "DevForum",
    description:
      "DevForum allows developers to ask questions, provide answers, and engage in discussions within a community-driven platform.",
    image: "/path/to/devforum.jpg",
    tags: ["NEXT.JS", "MONGODB", "TAILWIND CSS", "TYPESCRIPT", "SHADCN", "CLERK"],
    link: "https://example.com/devforum",
  },
  {
    id: 2,
    title: "ViNEXT",
    description:
      "Video conferencing web application with a focus on high-quality video streaming and low-latency communication.",
    image: "/path/to/vinext.jpg",
    tags: ["NEXT.JS", "SHADCN", "CLERK", "STREAM", "TYPESCRIPT", "TAILWINDCSS"],
    link: "https://example.com/vinext",
  },
  {
    id: 3,
    title: "Full Stack Twitter Clone",
    description: "Twitter clone using modern technologies.",
    image: "/path/to/twitter-clone.jpg",
    tags: ["REACT.JS", "NODE.JS", "EXPRESS.JS", "MONGODB", "RESTFUL API", "CLOUDINARY"],
    link: "https://example.com/twitter-clone",
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
              className="block rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 transform transition-transform duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-2xl"
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
