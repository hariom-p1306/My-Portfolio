

import React from "react";
import { SkillsInfo } from "../constants";
import Tilt from "react-parallax-tilt";
import BlurBlob from "../../components/BlurBlob/BlurBlob";

const Skills = () => (
  <section
    id="skills"
    className="relative overflow-hidden py-28 px-[6vw] md:px-[8vw] lg:px-[15vw]"
  >
    {/* Background Glow */}
    <BlurBlob top="25%" left="15%" size="500px" />
    <BlurBlob top="80%" left="85%" size="450px" delay="3s" />

    {/* Title */}
    <div className="text-center mb-20 relative z-10">
      <h2 className="text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
      <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
        A collection of my technical expertise across frontend, backend and tools.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-12 relative z-10">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
        >
          <div
            className={`glass-card p-8 rounded-3xl transition duration-500
            ${
              category.title === "Backend"
                ? "shadow-[0_0_60px_rgba(130,69,236,0.6)] border-purple-500/40"
                : "shadow-[0_0_40px_rgba(130,69,236,0.3)]"
            }
            hover:-translate-y-3 hover:shadow-[0_0_70px_rgba(130,69,236,0.6)]`}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center gap-2 
                  bg-white/5 border border-purple-500/20 
                  rounded-full px-4 py-2 
                  hover:bg-purple-500/10 
                  hover:scale-105 transition duration-300"
                >
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                  <span className="text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;