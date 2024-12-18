import React from "react";

const Home: React.FC = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.classList.add("pop-effect");
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        section.classList.remove("pop-effect");
      }, 500);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white flex items-center justify-center px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div
          className="flex flex-col space-y-6 animate-fade-in-left"
          style={{ animationDuration: "1s" }}
        >
          <h3 className="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Full Stack Developer
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-[#ff2655]">Hi,</span> I'm{" "}
            <span className="text-[#ff2655]">D</span>hruv{" "}
            <span className="text-[#ff2655]">P</span>ahuja
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            A passionate Full Stack Developer dedicated to building stunning,
            high-performance web applications.
          </p>
          <div className="flex space-x-6">
            <button
              onClick={() => handleScroll("contact")}
              className="px-6 py-3 bg-[#ff2655] text-white rounded-md hover:bg-[#e71a47] transition-transform transform hover:scale-105"
            >
              Contact Me
            </button>
            <button
              className="px-6 py-3 bg-gray-300 text-black dark:bg-gray-700 dark:text-white rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-transform transform hover:scale-105"
            >
              Download CV
            </button>
          </div>
        </div>
        <div
          className="flex justify-center items-center animate-fade-in-right"
          style={{ animationDuration: "1.2s" }}
        >
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-gray-300 dark:border-gray-700">
              <img
                src="/Dhruv.jpg"
                alt="Dhruv"
                className="w-72 md:w-96 h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
