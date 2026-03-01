// Skills Section Logos
import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';

import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';

import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';

import bootstrapLogo from '../assets/tech_logo/bootstrap.png';

import nodejsLogo from '../assets/tech_logo/nodejs.png';
import expressjsLogo from '../assets/tech_logo/express.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import mongodbLogo from '../assets/tech_logo/mongodb.png';

import cLogo from '../assets/tech_logo/c.png';
import  muiLogo from '../assets/tech_logo/materialUI.png';
import  websocketLogo from '../assets/tech_logo/socketIO.png';

import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from '../assets/tech_logo/python.png';

import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import vscodeLogo from '../assets/tech_logo/vscode.png';
import postmanLogo from '../assets/tech_logo/postman.png';

import vercelLogo from '../assets/tech_logo/vercel.png';



// Project Section Logos
import meetsync from  '../assets/work_logo/webRTC.png';
import airbnblogo from '../assets/work_logo/airbnb.png';
import myportfolio from '../assets/work_logo/myportfolio.png';


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: muiLogo },   // ADD THIS
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "WebSocket", logo: websocketLogo }, // ADD THIS
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },

  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C", logo: cLogo },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];



export const projects = [
  {
    id: 1,
    title: "MeetSync – Real-Time Video Conferencing Platform",
    description:
      "Engineered a scalable real-time video conferencing system using WebRTC and Socket.io with secure peer-to-peer communication, room-based architecture, SDP/ICE negotiation, and low-latency performance.",
    image: meetsync,
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "WebRTC",
      "Socket.io",
      "MongoDB"
    ],
    github: "https://github.com/hariom-p1306/MeetSync-Secure-WebRTC-Video-Conferencing",
    webapp: "https://meetsync-secure-webrtc-video.onrender.com/",
  },

  {
    id: 2,
    title: "Airbnb Full-Stack Booking Platform",
    description:
      "Developed a full-stack booking platform using MVC architecture with secure authentication, CRUD operations, REST APIs, and optimized MongoDB queries for efficient reservation management.",
    image: airbnblogo,
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Authentication",
      "REST API"
    ],
    github: "https://github.com/hariom-p1306/AirBnb-Full-Stack-Project-.git",
    webapp: "https://airbnb-full-stack-project-e7eq.onrender.com/listings",
  },

  {
    id: 3,
    title: "Developer Portfolio",
    description:
      "A modern responsive portfolio built with React and TailwindCSS featuring interactive UI components, smooth scrolling, and EmailJS integration for contact functionality.",
    image: myportfolio,
    tags: ["React", "TailwindCSS", "JavaScript", "EmailJS"],
    github: "https://github.com/hariom-p1306/My-Portfolio.git",
    webapp: "https://my-portfolio-three-ivory-72.vercel.app/",
  },
];