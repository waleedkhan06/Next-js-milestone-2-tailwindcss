import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const AboutMe = () => {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg1.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 text-white">
      
        <div className="text-center mb-16">
        <h1 className="text-4xl text-center font-bold mt-6 mb-6">
           
           <span className="text-cyan-400 hover:text-blue-500 
           hover:underline hover:scale-110 transition-all duration-300">About</span>{' '}
           <span className="text-blue-500 hover:text-cyan-400 
           hover:underline hover:scale-110 transition-all duration-300">Me</span>
            </h1>
          <p className="text-lg mt-4 text-gray-300">
            I am a Frontend Developer with a passion for building beautiful, responsive, and intuitive web applications.
          </p>
        </div>

    
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              Hi! I'm <span className="text-cyan-400 font-bold">Waleed Khan</span>, a passionate developer who loves to learn new technologies and create impactful projects. My goal is to build clean, efficient, and user-friendly applications using the latest technologies.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              I specialize in Frontend Development with expertise in HTML, CSS, JavaScript, React, Next.js, and more. I’m always looking to improve my skills and work on interesting projects that push the boundaries of web development.
            </p>
          </div>
        </div>

        {/* Skills Box */}
        <div className="mt-16 bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center text-cyan-400 mb-6">My Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {/* HTML */}
            <div className="flex flex-col items-center">
              <FaHtml5 size={40} className="text-orange-500" />
              <span className="mt-2 text-lg text-gray-300">HTML</span>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            {/* CSS */}
            <div className="flex flex-col items-center">
              <FaCss3Alt size={40} className="text-blue-400" />
              <span className="mt-2 text-lg text-gray-300">CSS</span>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            {/* JavaScript */}
            <div className="flex flex-col items-center">
              <FaJsSquare size={40} className="text-yellow-400" />
              <span className="mt-2 text-lg text-gray-300">JavaScript</span>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            {/* TypeScript */}
            <div className="flex flex-col items-center">
              <SiTypescript size={40} className="text-cyan-400" />
              <span className="mt-2 text-lg text-gray-300">TypeScript</span>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div className="bg-cyan-400 h-2 rounded-full" style={{ width: "70%" }}></div>
              </div>
            </div>
            {/* React */}
            <div className="flex flex-col items-center">
              <FaReact size={40} className="text-blue-500" />
              <span className="mt-2 text-lg text-gray-300">React</span>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            {/* Next.js */}
            <div className="flex flex-col items-center">
              <SiNextdotjs size={40} className="text-white" />
              <span className="mt-2 text-lg text-gray-300">Next.js</span>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div className="bg-black h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            {/* Tailwind CSS */}
            <div className="flex flex-col items-center">
              <SiTailwindcss size={40} className="text-teal-400" />
              <span className="mt-2 text-lg text-gray-300">Tailwind CSS</span>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div className="bg-teal-400 h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            {/* Node.js */}
            <div className="flex flex-col items-center">
              <FaNodeJs size={40} className="text-green-500" />
              <span className="mt-2 text-lg text-gray-300">Node.js</span>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            {/* GitHub */}
            <div className="flex flex-col items-center">
              <FaGithub size={40} className="text-gray-400" />
              <span className="mt-2 text-lg text-gray-300">GitHub</span>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div className="bg-gray-400 h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


