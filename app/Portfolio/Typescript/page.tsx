"use client";
import React, { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const TypeScriptProjects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Simple Calculator",
      description: "A basic calculator built with TypeScript and Inquirer.js.",
      image: "/Calculator.webp",
      category: "CLI Application",
      link: "https://github.com/waleedkhan06/Simple-calculater.git",
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

  const [visibleCount, setVisibleCount] = useState<number>(3);

  const handleViewToggle = () => {
    if (visibleCount === projects.length) {
      setVisibleCount(3); // Show fewer projects
    } else {
      setVisibleCount(projects.length); // Show all projects
    }
  };

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ backgroundImage: "url('/bg1.jpg')" }}>
      <div className="text-center mb-8">
      <h1 className="text-4xl text-center font-bold mt-6 mb-6">
           
           <span className="text-cyan-400 hover:text-blue-500 
           hover:underline hover:scale-110 transition-all duration-300">Typescript</span>{' '}
           <span className="text-blue-500 hover:text-cyan-400 
           hover:underline hover:scale-110 transition-all duration-300">Projects</span>
            </h1>
        <p className="text-gray-300 mb-6">A showcase of my work with TypeScript</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <div key={index} className="bg-black rounded-lg overflow-hidden shadow-sm border border-blue-500">
            <div className="relative h-48">
              <img src={project.image} alt={project.title} className=" h-full w-full object-cover"/>
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
                  className="px-4 py-2 w-full bg-gradient-to-r from-blue-500
                   to-cyan-400 text-black rounded
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
          onClick={handleViewToggle}
          className="px-6 py-2  bg-gradient-to-r from-blue-500
                   to-cyan-400 text-black rounded
                    hover:from-cyan-400 hover:to-blue-500 transition 
                    duration-300"
        >
          {visibleCount === projects.length ? "View Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default TypeScriptProjects;







