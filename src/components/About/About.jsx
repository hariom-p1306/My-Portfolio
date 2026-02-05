// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import Tilt from 'react-parallax-tilt';
// import profileImage from '../../assets/profile2.jpg';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
//     >
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center">
//         {/* Left Side */}
//         <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
//           {/* Greeting */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
//             Hi, I am
//           </h1>
//           {/* Name */}
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
//             Hariom Patel
//           </h2>
//           {/* Skills Heading with Typing Effect */}
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
//             <span className="text-white">I am a </span>
//             <span className="text-[#8245ec]">
//               <Typewriter
//                 words={[
//                   'Full Stack Developer',
//                   'Frontend Developer',
//                   'Backend Developer',
//                   'Software Developer',
//                   'Coder',
//                 ]}
//                 loop={0}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={80}
//                 deleteSpeed={50}
//                 delaySpeed={2000}
//               />
//             </span>

//           </h3>
//           {/* About Me Paragraph */}
//           <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
//             I am a passionate Full Stack Developer focused on building scalable and user-friendly web applications.
//             I actively practice Data Structures and Algorithms and have solved 100+ problems on LeetCode.
//             This has improved my logical thinking, problem-solving ability, and coding discipline.
//             I believe in consistency, practical learning, and continuous self-improvement.
//           </p>
//           {/* Resume Button */}
//           <a
//             href="https://drive.google.com/file/d/1YHTWgmtA2h1mV4jd0GfuI83-1kbFJpGJ/view?usp=drivesdk"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
//             style={{
//               background: 'linear-gradient(90deg, #8245ec, #a855f7)',
//               boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
//             }}
//           >
//             DOWNLOAD CV
//           </a>

//         </div>
//         {/* Right Side */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <Tilt
//             className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             scale={1.05}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <img
//               src={profileImage}
//               alt="Hariom Patel"
//               className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//             />
//           </Tilt>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-[5vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hariom Patel
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  'Full Stack Developer',
                  'Frontend Developer',
                  'Backend Developer',
                  'Software Developer',
                  'Coder',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-8 mt-6 leading-relaxed">
            I am a passionate Full Stack Developer focused on building scalable and user-friendly web applications.
            I actively practice Data Structures and Algorithms and have solved 150+ problems on LeetCode.
            This has improved my logical thinking, problem-solving ability, and coding discipline.
            I believe in consistency, practical learning, and continuous self-improvement.
          </p>
          <a
            href="https://drive.google.com/file/d/1KJs1ZOG0Ut774pLgGNfPB-m5jU7n4kbZ/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <Tilt
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Hariom Patel"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;


