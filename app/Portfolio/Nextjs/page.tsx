"use client";
import React, { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const NextJSProjects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js showcasing my skills and projects.",
      image: "/pic1.PNG", 
      category: "Web Development",
      link: "https://portfolio-website-jqof3uv9a-waleed0248s-projects.vercel.app", 
    },
    {
      title: "Counter Timer",
      description: "A simple countdown timer built with Next.js.",
      image: "/pic2.PNG", 
      category: "Web App",
      link: "https://countdown-timer-aqslz8nv9-waleed0248s-projects.vercel.app", 
    },
    {
      title: "Weather App",
      description: "A weather app that fetches data from a public API to display current weather conditions.",
      image: "/pic4.PNG", 
      category: "Web App",
      link: "https://weather-widgit-app-9yhc-jce62ih8z-waleed0248s-projects.vercel.app", 
    },
    {
      title: "Birthday Wish App",
      description: "An app that generates custom birthday wishes for your friends and family.",
      image: "/pic3.PNG", 
      category: "Web App",
      link: "https://birthday-wish-3fp2jq3s5-waleed0248s-projects.vercel.app", 
    },
    {
      title: "Small Figma Clone",
      description: "A small clone of Figma's interface built using Next.js, replicating its basic features.",
      image: "/pic6.PNG", 
      category: "UI Clone",
      link: "https://assignment-6-9jrg-98sl27gar-waleed0248s-projects.vercel.app", 
    },
    {
      title: "Figma Clone Hero Page",
      description: "A hero page clone of Figma's website, showcasing its header, call-to-action, and layout.",
      image: "/pic5.PNG", 
      category: "UI Clone",
      link: "https://class-assignment-5-52klkug8u-waleed0248s-projects.vercel.app",
    },
  ];

  const [showAll, setShowAll] = useState<boolean>(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div
      className="max-w-7xl mx-auto px-4 py-8"
      style={{
        backgroundImage: "url('/bg1.jpg')", 
      }}
    >
      <div className="text-center mb-8">
      <h1 className="text-4xl text-center font-bold mt-6 mb-6">
           
           <span className="text-cyan-400 hover:text-blue-500 
           hover:underline hover:scale-110 transition-all duration-300">Next Js</span>{' '}
           <span className="text-blue-500 hover:text-cyan-400 
           hover:underline hover:scale-110 transition-all duration-300">Projects</span>
            </h1>
        <p className="text-gray-300 mb-6">A showcase of my work with Next.js</p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-lg overflow-hidden shadow-sm border-2 border-blue-500"
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-cyan-400">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>
              <span className="block text-bold text-blue-500 mt-2">{project.category}</span>
              <div className="mt-4 text-right">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500
                   to-cyan-400 text-black px-6 py-3 rounded
                    hover:from-cyan-400 hover:to-blue-500 transition 
                    duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className=" rounded-full bg-gradient-to-r from-blue-500
                   to-cyan-400 text-black px-6 py-3 
                    hover:from-cyan-400 hover:to-blue-500 transition 
                    duration-300"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default NextJSProjects;
