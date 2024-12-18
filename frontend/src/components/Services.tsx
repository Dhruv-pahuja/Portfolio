import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Full Stack Development",
      description:
        "I build complete web applications from frontend to backend with modern technologies like React, Next.js, Node.js, and MongoDB.",
      icon: "🌐",
    },
    {
      title: "Frontend Development",
      description:
        "I create responsive, user-friendly interfaces with React, Tailwind CSS, and other modern frameworks for an exceptional user experience.",
      icon: "💻",
    },
    {
      title: "Backend Development",
      description:
        "I develop robust backend systems and APIs using Node.js, Express, and MongoDB to ensure seamless app functionality.",
      icon: "⚙️",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-12 bg-gray-100 dark:bg-black text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border-t-4 border-[#ff2655] hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 text-[#ff2655] text-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
