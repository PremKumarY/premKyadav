import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import CertificateSection from './CertificateSection';

export default function Home() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <>
            <section
                id="home"
                className="relative min-h-screen w-full flex items-center justify-center bg-black text-white px-4 overflow-hidden"
            >
                {/* Pulse Stars */}
                <Particles
                    id="pulseStars"
                    init={particlesInit}
                    options={{
                        fullScreen: { enable: false, zIndex: 0 },
                        background: { color: { value: "#000000" } },
                        fpsLimit: 60,
                        interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
                        particles: {
                            color: { value: "#00f7ff" },
                            links: { enable: false },
                            move: { enable: true, speed: 0.2, random: true, outModes: "out" },
                            number: { value: 80, density: { enable: true, area: 800 } },
                            opacity: { value: 0.7, random: { enable: true, minimumValue: 0.3 }, anim: { enable: true, speed: 1, opacity_min: 0.2 } },
                            shape: { type: "circle" },
                            size: { value: { min: 1, max: 3 }, random: true, anim: { enable: true, speed: 2, size_min: 0.3 } },
                        },
                        detectRetina: true,
                    }}
                    className="absolute inset-0 z-0"
                />

                {/* Shooting Stars */}
                <Particles
                    id="shootingStars"
                    init={particlesInit}
                    options={{
                        fullScreen: { enable: false },
                        particles: {
                            number: { value: 0 },
                            color: { value: "#ffffff" },
                            shape: { type: "star" },
                            move: { enable: true, speed: 6, direction: "top-right", straight: true, outModes: "destroy" },
                            size: { value: 2 },
                        },
                        emitters: [
                            {
                                direction: "top-right",
                                life: { count: 0, duration: 0.1 },
                                rate: { delay: 2, quantity: 1 },
                                size: { width: 0, height: 0 },
                                position: { x: 0, y: 100 }
                            }
                        ],
                        detectRetina: true,
                    }}
                    className="absolute inset-0 z-0"
                />

                {/* Main Content */}
                <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Hi, I'm <span className="text-blue-500">Prem Kumar Yadav</span>
                    </motion.h1>

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
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </motion.p>

                    <motion.div
                        className="flex justify-center items-center flex-wrap gap-4 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <Link
                            to="/Resume_Prem_Kumar_Yadav.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold transition duration-300"
                        >
                            View / Download Resume
                        </Link>

                        <Link
                            to="/Contact"
                            className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.div
                        className="flex justify-center items-center space-x-6 text-2xl text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <Link to="https://github.com/PremKumarY" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaGithub />
                        </Link>
                        <Link to="https://www.linkedin.com/in/prem-kumar-yadav-15a06a208/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaLinkedin />
                        </Link>
                        <Link to="mailto:yadavpremkumar02m@gmail.com" className="hover:text-white">
                            <FaEnvelope />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <About />
            <Projects />
            <CertificateSection />
            <Contact />
        </>
    );
}
