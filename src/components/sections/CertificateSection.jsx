import React, { useState } from 'react';
import { X } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: "AI Workshop Certificate",
    img: "/certificates/python certificate.jpg",
    alt: "AI Workshop Certificate Image",
    description: "Certificate of completion for the AI Workshop held in 2023.",
  },
  {
    id: 2,
    title: "Web Development",
    img: "/certificates/AI certificate.pdf",
    alt: "Web Development Certificate PDF",
    description: "Certificate of completion for the Web Development course.",
  },
  {
    id: 3,
    title: "Hackathon Winner",
    img: "/certificates/My_Bharat_Certificate.png",
    alt: "Hackathon Winner Certificate Image",
    description: "Certificate for winning the annual Hackathon in 2022.",
  },
  
  // Add more...
];

export default function CertificateSection() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <div className="py-12 px-4 md:px-16 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">📜 Certificates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedCertificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(cert)}
          >
            <img
              src={
                cert.img.endsWith('.pdf')
                  ? "/certificates/pdf-placeholder.png" // Optional: use placeholder for PDFs
                  : cert.img
              }
              alt={cert.alt}
              className="w-full h-64 object-cover rounded-xl"
              loading="lazy"
            />
            <p className="text-center py-2 font-medium">{cert.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Show More / Less button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-5xl w-full bg-white rounded"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-red-600 transition"
                onClick={() => setSelected(null)}
              >
                <X size={24} />
              </button>

              {selected.img.endsWith('.pdf') ? (
                <iframe
                  src={selected.img}
                  className="w-full h-[90vh] rounded"
                  title={selected.title}
                />
              ) : (
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              )}

              <p className="text-center mt-4 text-xl font-semibold text-black">
                {selected.title}
              </p>
              <p className="text-center text-sm text-gray-600 px-4 mb-4">
                {selected.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
