

import React, { useState } from "react";
import { X, Download, ChevronLeft, ChevronRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";


const certificates = [
  {
    id: 1,
    title: "Data Science & AI/ML Internship Trainee | IBM–BBDU",
    img: "/certificates/All in one.jpg",
    alt: "Data Science & AI/ML Internship Trainee | IBM–BBDU Certificate Image",
    description:
      "Certificate of completion for the Data Science & AI/ML Internship Trainee program at IBM–BBDU.",
  },
  {
    id: 2,
    title: "Artificial Intelligence Analyst",
    img: "/certificates/AI certificate.jpg",
    alt: "Artificial Intelligence Analyst Certificate Image",
    description:
      "Certificate of completion for the Artificial Intelligence Analyst program.",
  },
  {
    id: 3,
    title: "Business Intelligence",
    img: "/certificates/Bi.jpg",
    alt: "Business Intelligence Certificate Image",
    description: "Certificate for completing the Business Intelligence program.",
  },
  {
    id: 4,
    title: "Machine Learning with Python",
    img: "/certificates/machine learning.jpg",
    alt: "Machine Learning Certificate Image",
    description:
      "Certificate for completing the Machine Learning with Python program.",
  },
  {
    id: 5,
    title: "NoSQL Database Management",
    img: "/certificates/NoSql and DBaas certificate.jpg",
    alt: "NoSQL Database Management Certificate Image",
    description:
      "Certificate for completing the NoSQL Database Management program.",
  },
  {
    id: 6,
    title: "AI Certification Badge",
    img: "/certificates/AI Certification.jpg",
    alt: "AI Certification Image",
    description:
      "Certificate for completing the AI Certification program.",
  },
  {
    id: 7,
    title: "Mobile App Development",
    img: "/certificates/App.jpg",
    alt: "Mobile App Development Image",
    description:
      "Certificate for completing the Mobile App Development program.",
  },
  {
    id: 8,
    title: "Software Development Internship",
    img: "/certificates/internship.jpg",
    alt: "Software Development Internship Image",
    description:
      "Certificate for completing the Software Development Internship program.",
  },
  {
    id: 9,
    title: "MERN full stack Internship",
    img: "/certificates/EduNet.jpg",
    alt: "MERN full stack Internship Image",
    description:
      "Certificate for completing the MERN full stack Internship program.",
  },
  {
    id: 10,
    title: "python with Django summer Internship Training",
    img: "/certificates/Summer.jpg",
    alt: "python with Django summer Internship Training Image",
    description:
      "Certificate for completing the python with Django summer Internship Training program.",
  },
];


export default function CertificateSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const extraCount = certificates.length > 6 ? certificates.length - 6 : 0;

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const prevCertificate = () => {
    setSelectedIndex(
      (selectedIndex - 1 + certificates.length) % certificates.length
    );
  };

  const nextCertificate = () => {
    setSelectedIndex((selectedIndex + 1) % certificates.length);
  };

  return (
    <section
      id="certificates"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6 py-16"
    >
      <div className="max-w-7xl w-full mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Certificates
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of my professional achievements, certifications, and
          training programs that showcase my expertise. 📜
        </motion.p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {(showAll ? certificates : certificates.slice(0, 6)).map(
            (cert, index) => (
              <motion.div
                key={cert.id}
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openModal(index)}
              >
                <img
                  src={
                    cert.img.endsWith(".pdf")
                      ? "/certificates/pdf-placeholder.png"
                      : cert.img
                  }
                  alt={cert.alt}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white font-semibold px-4">
                    {cert.title}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Show More / Less */}
        {extraCount > 0 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-medium shadow-md"
            >
              {showAll ? "Show Less" : `Show More (+${extraCount})`}
            </button>
          </div>
        )}

        {/* Fullscreen Modal Carousel */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 transition z-50"
                  onClick={closeModal}
                >
                  <X size={22} />
                </button>

                {/* Navigation */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition z-50"
                  onClick={prevCertificate}
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition z-50"
                  onClick={nextCertificate}
                >
                  <ChevronRight size={22} />
                </button>

                {/* Certificate Image */}
                {certificates[selectedIndex].img.endsWith(".pdf") ? (
                  <iframe
                    src={certificates[selectedIndex].img}
                    className="w-full h-[75vh] rounded-xl"
                    style={{ border: "none" }}
                    title={certificates[selectedIndex].title}
                  />
                ) : (
                  <img
                    src={certificates[selectedIndex].img}
                    alt={certificates[selectedIndex].title}
                    className="w-full h-[75vh] object-contain rounded-xl"
                  />
                )}

                {/* Info */}
                <div className="mt-6 text-center">
                  <p className="text-xl font-bold text-gray-900">
                    {certificates[selectedIndex].title}
                  </p>
                  <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2">
                    {certificates[selectedIndex].description}
                  </p>
                </div>

                {/* Download */}
                <div className="flex justify-center mt-6">
                  <a
                    href={certificates[selectedIndex].img}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-medium shadow-md"
                  >
                    <Download size={18} /> Download
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
