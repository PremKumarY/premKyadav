import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPython, SiPandas, SiNumpy, SiTensorflow, SiJupyter, SiScikitlearn } from 'react-icons/si';

export default function About() {
  return (
    <section id="About" className="py-20 bg-black text-white">
      <div className="max-w-5xl w-full mx-auto px-4 flex flex-col items-center text-center">

        {/* Profile Photo */}
        <motion.img
          src="/about1.JPG" // <-- Replace this with your actual image path
          alt="Prem Kumar Yadav"
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-500 shadow-xl mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          className="text-gray-300 max-w-3xl mx-auto text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I’m a full stack web developer passionate about building high-performance and scalable web applications using the MERN stack, Tailwind CSS, and exploring AI/ML technologies.
        </motion.p>

        {/* Skills with Icons */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl text-blue-400 mb-2" />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-4xl text-green-500 mb-2" />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress className="text-4xl text-gray-300 mb-2" />
            <p>Express</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-4xl text-green-400 mb-2" />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-4xl text-yellow-400 mb-2" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-4xl text-cyan-400 mb-2" />
            <p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub className="text-4xl text-white mb-2" />
            <p>GitHub</p>
          </div>
          <div className="flex flex-col items-center">
            <SiPython className="text-4xl text-yellow-300 mb-2" />
            <p>Python</p>
          </div>
          <div className="flex flex-col items-center">
            <SiPandas className="text-4xl text-yellow-300 mb-2" />
            <p>Pandas</p>
          </div>
          <div className="flex flex-col items-center">
            <SiNumpy className="text-4xl text-yellow-300 mb-2" />
            <p>Numpy</p>
          </div>
          <div className="flex flex-col items-center">
            <SiScikitlearn className="text-4xl text-yellow-300 mb-2" />
            <p>Scikitlearn</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTensorflow className="text-4xl text-yellow-300 mb-2" />
            <p>Tensorflow</p>
          </div>
          <div className="flex flex-col items-center">
            <SiJupyter className="text-4xl text-yellow-300 mb-2" />
            <p>Jupyter</p>
          </div>
          
          
        </motion.div>
      </div>
    </section>
  );
}
