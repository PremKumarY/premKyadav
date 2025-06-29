import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-6 mt-10 text-center text-gray-400">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-white font-medium">Prem Kumar Yadav</span>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 text-lg">
          <a
            href="https://github.com/PremKumarY"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/prem-kumar-yadav-15a06a208/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:yadavpremkumar02m@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
