import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-5xl w-full mx-auto text-center">
        {/* Main Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-blue-500">Prem Kumar Yadav</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.p
          className="text-lg md:text-xl text-blue-400 mb-6 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Typewriter
            words={[
              'Full Stack Developer',
              'MERN Stack Enthusiast',
              'Open Source Contributor',
              'AI & ML Explorer',
              'React + Node.js Lover',
            ]}
            loop={0} // Infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center items-center flex-wrap gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="/public/Prem_Kumar_Yadav_Resume.pdf" // Adjust the path to your resume file
            download
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="#Contact"
            className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center items-center space-x-6 text-2xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a href="https://github.com/PremKumarY" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/prem-kumar-yadav-15a06a208/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="mailto:yadavpremkumar02m@gmail.com" className="hover:text-white">
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
