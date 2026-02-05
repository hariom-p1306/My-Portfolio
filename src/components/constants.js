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

import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from '../assets/tech_logo/python.png';

import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import vscodeLogo from '../assets/tech_logo/vscode.png';
import postmanLogo from '../assets/tech_logo/postman.png';

import vercelLogo from '../assets/tech_logo/vercel.png';


// Project Section Logos
import airbnblogo from '../assets/work_logo/airbnb.png';
import myportfolio from '../assets/work_logo/myportfolio.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

 
 
  export const projects = [
    {
      id: 0,
      title: "Airbnb Full-Stack Booking Platform",
      description:
        "A full-stack web application that allows users to browse, list, and book rental properties. Built using MVC architecture with secure authentication, CRUD operations, and responsive UI. Implemented RESTful APIs, user authorization, and database relationships to manage bookings and listings efficiently.",
      image: airbnblogo,
      tags: ["HTML", "CSS", "JavaScript","EJS","Bootstrap", "React JS","Node.js","Express.js","MongoDB","MVC Architecture","REST API","Authentication","Authorization",],
      github: "https://github.com/hariom-p1306/AirBnb-Full-Stack-Project-.git",
      webapp: "https://airbnb-full-stack-project-e7eq.onrender.com/listings",
    },
      {
      id: 1,
      title: "Hariom Patel – Developer Portfolio",
      description:
       "A modern and responsive portfolio website showcasing the projects, skills, and achievements of Hariom Patel, a passionate Full Stack Developer. Built with React, TailwindCSS, and JavaScript, featuring interactive UI components, smooth scrolling, and a contact form integrated with EmailJS. Designed to demonstrate technical skills, creativity, and professional experience.",
      image: myportfolio,
      tags: ["HTML","React ","JavaScript","TailwindCSS"],
      github: "https://github.com/hariom-p1306/My-Portfolio.git",
      webapp: "https://my-portfolio-three-ivory-72.vercel.app/",
    },
  ];