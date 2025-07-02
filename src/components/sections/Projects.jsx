import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [

  {
    title: 'Debate Assistant AI',
    description: 'A voice + text assistant to debate on Politics & Pollution using Wikipedia + NLP.',
    tech: ['React', 'Python', 'NLP', 'MongoDB'],
    github: 'https://github.com/PremKumarY/frontend.git',
  },
  {
    title: 'Construction Web Application',
    description: 'A web application for managing construction projects, including task assignments and progress tracking.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/PremKumarY/Construction.git',
  },
  {
    title: 'Content Management System',
    description: 'A comprehensive system for managing content across various platforms, ensuring efficient workflows and collaboration.',
    tech: ['Python', 'Django','HTML', 'CSS', 'Js','Bootstrap'],
    github: 'https://github.com/PremKumarY/CMS_test.git',
  },
  {
    title: 'My Portfolio',
    description: 'A personal portfolio showcasing my projects, skills, and experience.',
    tech: ['Python', 'Django','HTML', 'CSS', 'Js','Bootstrap'],
    github: 'https://github.com/PremKumarY/premKyadav.git',
  },
];

export default function Projects() {
  return (
    <section id="Projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI & Data Science, <br /> <span className="text-blue-500">
          Full Stack </span>Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/10 rounded-full text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center gap-1 text-sm"
                >
                  <FaGithub /> View Code
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
