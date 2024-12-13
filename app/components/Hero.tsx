import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-cover
     bg-center text-white" style={{ backgroundImage: "url('/bg2.jpg')" }}>
      <div className="flex flex-col md:flex-row justify-between items-center
       w-4/5 max-w-7xl">
      
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="text-cyan-500">I&apos;m </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold
             text-cyan-400 hover:text-blue-500 hover:underline
              hover:scale-105 transition-all duration-300 mb-4">
              Waleed Khan
            </span>
          </h1>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold
           text-cyan-400 hover:text-blue-500 hover:underline 
           hover:scale-105 transition-all duration-300 mb-4">
            Frontend Developer
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400
           mb-8 max-w-md mx-auto md:mx-0">
            Welcome to my portfolio! I’m Waleed, a creative and dedicated frontend
             developer with a passion for building responsive, user-friendly websites.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="/Portfolio"
              className="px-6 py-3 bg-gradient-to-r from-blue-500
                   to-cyan-400 text-black  rounded
                    hover:from-cyan-400 hover:to-blue-500 transition 
                    duration-300"
            >
              View My Work
            </Link>
            <Link
              href="/Contact"
              className=" px-6 py-3 bg-gradient-to-r from-blue-500
                   to-cyan-400 text-black  rounded
                    hover:from-cyan-400 hover:to-blue-500 transition 
                    duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>

      
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/animated.gif"
            alt="Profile"
            width={450}
            height={280}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

