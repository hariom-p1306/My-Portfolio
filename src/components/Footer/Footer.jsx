

import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import BlurBlob from "../../components/BlurBlob/BlurBlob";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden mt-24">

      {/* Background Glow */}
      <BlurBlob top="20%" left="15%" size="400px" />
      <BlurBlob top="80%" left="85%" size="350px" delay="3s" />

      <div className="relative z-10 border-t border-purple-500/20 
        bg-white/5 backdrop-blur-xl 
        px-[6vw] md:px-[8vw] lg:px-[15vw] py-14">

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

          {/* Logo */}
          <h2 className="text-2xl font-bold 
            bg-gradient-to-r from-purple-400 to-pink-500 
            text-transparent bg-clip-text">
            Hariom Patel
          </h2>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mt-6 text-gray-300">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Projects", id: "work" },
              { name: "Contact", id: "contact" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="relative group hover:text-purple-400 transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 
                  bg-gradient-to-r from-purple-500 to-pink-500 
                  transition-all duration-300 group-hover:w-full">
                </span>
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8 text-xl">
            {[
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hariom-patel-dev" },
              { icon: <FaGithub />, link: "https://github.com/hariom-p1306" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full 
                bg-white/5 border border-purple-500/20
                hover:bg-purple-500/10 
                hover:shadow-[0_0_25px_rgba(130,69,236,0.6)]
                hover:scale-110 transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r 
            from-transparent via-purple-500/40 to-transparent mt-10">
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 mt-6">
            © {new Date().getFullYear()} Hariom Patel. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
