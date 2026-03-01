


import React, { useState } from "react";
import { projects } from "../constants";
import BlurBlob from "../../components/BlurBlob/BlurBlob";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="relative overflow-hidden py-28 px-[6vw] md:px-[8vw] lg:px-[15vw]"
    >
      <BlurBlob top="20%" left="15%" size="500px" />
      <BlurBlob top="80%" left="85%" size="450px" delay="3s" />

      {/* Title */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`glass-card rounded-3xl overflow-hidden cursor-pointer group
            hover:-translate-y-3 hover:shadow-[0_0_70px_rgba(130,69,236,0.6)]
            transition duration-500
            ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm line-clamp-3 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                    text-purple-400 border border-purple-500/30 
                    hover:scale-105 transition duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="glass-card max-w-4xl w-full rounded-3xl overflow-hidden relative p-6">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-6 text-3xl text-white hover:text-purple-400"
            >
              &times;
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />

            <h3 className="text-3xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {selectedProject.description}
            </p>

            <div className="flex gap-6">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 premium-btn bg-gray-800 text-white py-3 rounded-xl text-center"
              >
                View Code
              </a>

              <a
                href={selectedProject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 premium-btn bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl text-center"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;