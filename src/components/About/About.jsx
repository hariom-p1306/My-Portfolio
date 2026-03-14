

// import React from "react";
// import { FaRocket, FaCode, FaCube, FaCloud } from "react-icons/fa";
// import profileImage from "../../assets/hariompatel.png";
// import BlurBlob from "../../components/BlurBlob/BlurBlob";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden py-28 px-[6vw] md:px-[8vw] lg:px-[15vw]
//       bg-gradient-to-br from-[#070c18] via-[#0b0f1c] to-[#140d2a]"
//     >
//       <BlurBlob top="20%" left="15%" size="450px" />
//        <BlurBlob top="80%" left="85%" size="400px" delay="3s" />
//       {/* Background Glow */}
//       <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-blue-600/20 blur-[150px] rounded-full"></div>
//       <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-600/30 blur-[160px] rounded-full"></div>

//       <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">

//         {/* LEFT CONTENT */}
//         <div>

//           <p className="text-purple-400 mb-4 tracking-wide">— About Me</p>

//           <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//             Hi, I'm{" "}
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
//               Hariom Patel
//             </span>
//           </h1>

//           {/* Professional Badge */}
//           <div className="mt-6 inline-block px-6 py-2 rounded-full 
//             bg-gradient-to-r from-purple-500/10 to-pink-500/10 
//             border border-purple-500/30 text-gray-200 backdrop-blur-md">
//             Backend-Focused Full Stack Developer (MERN)
//           </div>

//           <p className="text-gray-400 mt-6 text-lg">
//             I design scalable REST APIs and real-time systems using{" "}
//             <span className="text-green-400">Node.js</span>,{" "}
//             <span className="text-blue-400">WebRTC</span>, and modern cloud tools.
//           </p>

//           {/* Highlights from Resume */}
//           <div className="mt-10 space-y-6 text-gray-300">

//             <div className="flex items-start gap-4">
//               <FaRocket className="text-purple-400 mt-1" />
//               <p>
//                 Engineered secure peer-to-peer{" "}
//                 <span className="text-blue-400">WebRTC</span> video conferencing system with room-based architecture.
//               </p>
//             </div>

//             <div className="flex items-start gap-4">
//               <FaCode className="text-green-400 mt-1" />
//               <p>
//                 Built scalable REST APIs using{" "}
//                 <span className="text-green-400">Node.js & Express</span> with middleware validation.
//               </p>
//             </div>

//             <div className="flex items-start gap-4">
//               <FaCube className="text-yellow-400 mt-1" />
//               <p>
//                 Solved <span className="text-yellow-400">190+ LeetCode</span> problems focusing on time & space optimization.
//               </p>
//             </div>

//             <div className="flex items-start gap-4">
//               <FaCloud className="text-cyan-400 mt-1" />
//               <p>
//                 Deployed production-ready applications on cloud with secure authentication & database optimization.
//               </p>
//             </div>

//           </div>

//           {/* Buttons */}
//           <div className="mt-12 flex gap-6 flex-wrap">

//             <a
//               href="#work"
//               className="px-8 py-3 rounded-full 
//               bg-gradient-to-r from-purple-600 to-pink-500 
//               text-white font-semibold 
//               shadow-[0_0_40px_rgba(168,85,247,0.7)]
//               hover:scale-105 transition duration-300"
//             >
//               View Projects →
//             </a>

//             <a
//               href="https://drive.google.com/file/d/1kBEEZOE28jAj-QHBeW01bYfFxP0PSQkE/view?usp=drivesdk"
//               className="px-8 py-3 rounded-full border border-purple-500 
//               text-white hover:bg-purple-500 hover:text-white 
//               transition duration-300"
//             >
//               Download Resume ↓
//             </a>

//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex justify-center">

//           {/* Matching Glow */}
//           <div className="absolute w-[520px] h-[520px] 
//               bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-pink-500/30 
//               blur-[180px] rounded-full"></div>

//           <img
//             src={profileImage}
//             alt="Hariom Patel"
//             className="relative z-10 w-[440px] rounded-3xl 
//                        shadow-[0_0_80px_rgba(130,69,236,0.5)]"
//           />
//         </div>

//       </div>

//       {/* STATS SECTION */}
//       <div className="mt-24 bg-white/5 backdrop-blur-xl 
//         border border-purple-500/20 rounded-3xl p-10">

//         <div className="flex flex-col md:flex-row justify-between items-center text-center gap-8">

//           <div className="flex-1">
//             <h3 className="text-3xl font-bold text-purple-400">190+</h3>
//             <p className="text-gray-400">LeetCode Problems</p>
//           </div>

//           <div className="hidden md:block w-px h-16 bg-purple-500/20"></div>

//           <div className="flex-1">
//             <h3 className="text-3xl font-bold text-blue-400">2+</h3>
//             <p className="text-gray-400">Major Projects</p>
//           </div>

//           <div className="hidden md:block w-px h-16 bg-purple-500/20"></div>

//           <div className="flex-1">
//             <h3 className="text-3xl font-bold text-pink-400">1</h3>
//             <p className="text-gray-400">Real-Time System</p>
//           </div>

//           <div className="hidden md:block w-px h-16 bg-purple-500/20"></div>

//           <div className="flex-1">
//             <h3 className="text-3xl font-bold text-green-400">2026</h3>
//             <p className="text-gray-400">Open to Internship</p>
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default About;


import React from "react";
import { FaRocket, FaCode, FaCube, FaCloud } from "react-icons/fa";
import profileImage from "../../assets/hariompatel.png";
import BlurBlob from "../../components/BlurBlob/BlurBlob";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-28 
      px-[6vw] md:px-[8vw] lg:px-[15vw]
      bg-gradient-to-br from-[#070c18] via-[#0b0f1c] to-[#140d2a]"
    >
      {/* Animated Blur Blobs */}
      <BlurBlob top="20%" left="15%" size="400px" />
      <BlurBlob top="80%" left="85%" size="350px" delay="3s" />

      {/* Background Glows */}
      <div className="absolute left-0 top-0 w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-blue-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute right-0 top-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-purple-600/30 blur-[160px] rounded-full"></div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center relative z-10">

        {/* RIGHT IMAGE FIRST ON MOBILE */}
        <div className="relative flex justify-center order-1 md:order-2">

          {/* Matching Glow */}
          <div className="absolute w-[350px] h-[350px] md:w-[520px] md:h-[520px]
              bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-pink-500/30 
              blur-[180px] rounded-full"></div>

          <img
            src={profileImage}
            alt="Hariom Patel"
            className="relative z-10 
                       w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px]
                       rounded-3xl 
                       shadow-[0_0_80px_rgba(130,69,236,0.5)]"
          />
        </div>

        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1">

          <p className="text-purple-400 mb-4 tracking-wide text-sm md:text-base">
            — About Me
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
              Hariom Patel
            </span>
          </h1>

          {/* Professional Badge */}
          <div className="mt-6 inline-block px-6 py-2 rounded-full 
            bg-gradient-to-r from-purple-500/10 to-pink-500/10 
            border border-purple-500/30 text-gray-200 backdrop-blur-md text-sm md:text-base">
            Full Stack Developer (MERN)
          </div>

          <p className="text-gray-400 mt-6 text-base md:text-lg">
            I design scalable REST APIs and real-time systems using{" "}
            <span className="text-green-400">Node.js</span>,{" "}
            <span className="text-blue-400">WebRTC</span>, and modern cloud tools.
          </p>

          {/* Highlights */}
          <div className="mt-8 md:mt-10 space-y-5 md:space-y-6 text-gray-300 text-sm md:text-base">

            <div className="flex items-start gap-4">
              <FaRocket className="text-purple-400 mt-1" />
              <p>
                Engineered secure peer-to-peer{" "}
                <span className="text-blue-400">WebRTC</span> video conferencing system.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCode className="text-green-400 mt-1" />
              <p>
                Built scalable REST APIs using{" "}
                <span className="text-green-400">Node.js & Express</span>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCube className="text-yellow-400 mt-1" />
              <p>
                Solved <span className="text-yellow-400">200+ LeetCode</span> problems.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCloud className="text-cyan-400 mt-1" />
              <p>
                Deployed production-ready applications with cloud & secure authentication.
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 md:mt-12 flex flex-wrap gap-4 md:gap-6">

            <a
              href="#work"
              className="px-6 md:px-8 py-3 rounded-full 
              bg-gradient-to-r from-purple-600 to-pink-500 
              text-white font-semibold 
              shadow-[0_0_40px_rgba(168,85,247,0.7)]
              hover:scale-105 transition duration-300 text-sm md:text-base"
            >
              View Projects →
            </a>

            <a
              href="https://drive.google.com/file/d/1kBEEZOE28jAj-QHBeW01bYfFxP0PSQkE/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 rounded-full border border-purple-500 
              text-white hover:bg-purple-500 hover:text-white 
              transition duration-300 text-sm md:text-base"
            >
              Download Resume ↓
            </a>

          </div>
        </div>

      </div>

      {/* STATS */}
      <div className="mt-20 md:mt-24 bg-white/5 backdrop-blur-xl 
        border border-purple-500/20 rounded-3xl p-6 md:p-10">

        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-8">

          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-400">200+</h3>
            <p className="text-gray-400 text-sm md:text-base">LeetCode Problems</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-purple-500/20"></div>

          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400">4+</h3>
            <p className="text-gray-400 text-sm md:text-base">Major Projects</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-purple-500/20"></div>

          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-400">1</h3>
            <p className="text-gray-400 text-sm md:text-base">Real-Time System</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-purple-500/20"></div>

          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400">2026</h3>
            <p className="text-gray-400 text-sm md:text-base">Open to Internship</p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;