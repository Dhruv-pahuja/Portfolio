import React, { useState } from "react";
import {Linkedin,Github } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white md:mb-4 mb-7">
      {/* Contact Information */}
      <div className="space-y-6 md:w-1/2 w-full">
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
        {/* Social Media Icons */}
        <div className="flex gap-4 justify-center md:justify-start text-xl">
          <a
            href="#"
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
        {/* Download CV Button */}
        <div className="flex justify-center md:justify-start">
          <button className="px-6 py-3 bg-[#e71a47] text-white rounded-md hover:bg-[#d9163f] transition">
            Download CV
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-lg mt-8 md:mt-0 md:mb-3 space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#e71a47]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#e71a47]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#e71a47]"
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
