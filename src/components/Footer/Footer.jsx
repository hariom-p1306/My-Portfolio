import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name */}
        <h2 className="text-xl font-semibold text-purple-500">
          Hariom Patel
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-6 text-xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 hover:scale-110 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 hover:scale-110 transition"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/hariom-patel-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 hover:scale-110 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/hariom-patel-dsa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 hover:scale-110 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Hariom Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
