import React, { useState } from "react";
import { Linkedin, Github } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(import.meta.env.VITE_BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between justify-items-center  px-4 py-6 bg-gray-100 dark:bg-black text-gray-800 dark:text-white md:mb-4 mb-7">
      <div className="space-y-8 md:w-1/2 w-[80vh] flex flex-col items-center self-center md:items-start place-content-center justify-around mt-7 md:mt-0 md:ml-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
          Contact Me
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-[#e71a47] text-xl">&#9993;</span>
            <p>dhruvpahuja013@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#e71a47] text-xl">&#9742;</span>
            <p>+91 9988877156</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center md:justify-start text-xl">
          <a
            href="https://github.com/Dhruv-pahuja"
            target="_blank"
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhruv-pahuja-658934272/"
            target="_blank"
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
        <div className="flex justify-center md:justify-start">
          <button className="px-6 py-3 bg-[#e71a47] text-white rounded-md hover:bg-[#d9163f] transition">
            Download CV
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white dark:bg-black rounded-lg p-6 md:p-8 shadow-lg mt-5 md:mt-0 md:mb-3 space-y-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 bg-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#e71a47]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 bg-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#e71a47]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 bg-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#e71a47]"
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#e71a47] text-white rounded-md hover:bg-[#d9163f] transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
