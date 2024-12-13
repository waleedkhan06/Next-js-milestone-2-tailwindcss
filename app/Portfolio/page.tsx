"use client";

import React, { useState, useEffect } from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, category, link }) => {
  return (
    <div className="bg-black text-white rounded-lg overflow-hidden shadow-sm border border-blue-500">
      <div className="relative h-48">
        <img
          src={image || "/api/placeholder/400/320"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-bold text-blue-500">{category}</span>
        </div>
        <h3 className="font-bold text-cyan-400  mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <div className="text-right">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-gradient-to-r from-blue-500
                   to-cyan-400 text-black px-6 py-3 rounded
                    hover:from-cyan-400 hover:to-blue-500 transition 
                    duration-300">
              View Project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js showcasing my skills and projects.",
      image: "/pic1.PNG", 
      category: "Web Development",
      link: "https://portfolio-website-jqof3uv9a-waleed0248s-projects.vercel.app",
    },
    {
      title: "Resume builder",
      description: "A dynamic resume builder tool enabling users to create, edit, and customize professional resumes effortlessly.",
      image: "/resume.PNG",
      category: "Web app",
      link: "https://hackathon-milestone-5-1830wiyu6-waleed0248s-projects.vercel.app",
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
    {
      title: "ATM Machine",
      description: "An ATM machine simulation with options to check balance, deposit, and withdraw.",
      image: "/atm.jpg",
      category: "CLI Application",
      link: "https://github.com/waleedkhan06/ATM-Machine-.git",
    },
    {
      title: "To-Do List",
      description: "A to-do list manager where users can add, complete, and view tasks.",
      image: "/todo.jfif",
      category: "CLI Application",
      link: "https://github.com/waleedkhan06/TODO-LIST.git",
    },
    {
      title: "Words Counter",
      description: "A tool that counts the number of words in a given text input.",
      image: "/wdc.png",
      category: "CLI Application",
      link: "https://github.com/waleedkhan06/Words-Counter.git",
    },
    {
      title: "Currency Converter",
      description: "A currency converter that allows users to convert from one currency to another.",
      image: "/cc.png",
      category: "CLI Application",
      link: "https://github.com/waleedkhan06/Currency-converter.git",
    },
    {
      title: "Number Guessing Game",
      description: "A fun number guessing game where the user guesses a randomly generated number.",
      image: "/ngs.jpg",
      category: "CLI Game",
      link: "https://github.com/waleedkhan06/Number-Guessing-game.git",
    },
  
  ];

  const [showAll, setShowAll] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, 3); 

  if (!isClient) {
    return null; 
  }

  return (
    <div
      className="max-w-7xl mx-auto px-4 py-8 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-blue-500">Portfolio</h1>
        <p className="text-gray-200 mb-6">A showcase of my work and projects</p>

       
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="/Portfolio/Typescript"
            className="text-cyan-400 font-medium hover:underline"
          >
            TypeScript Projects
          </a>
          <a
            href="/Portfolio/Nextjs"
            className="text-cyan-400 font-medium hover:underline"
          >
            Next.js Projects
          </a>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Buttons */}
      <div className="text-center mt-8">
       
        <div className="block lg:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 border border-white text-white rounded-full hover:bg-gray-700"
          >
            {showAll ? "View Less" : "View All"}
          </button>
        </div>

       
        <div className="hidden lg:block">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 borderw-full bg-gradient-to-r from-blue-500
                   to-cyan-400 text-black  rounded-full
                    hover:from-cyan-400 hover:to-blue-500 transition 
                    duration-300"
          >
            {showAll ? "View Less" : "View All Projects"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;



;


