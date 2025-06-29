import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzQkf5VUPHRH87hp6Hg7azwQwVhEvqjxO2op4n0--haaHMfEuXqUcLnO31s9a1zwOFF9A/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      setShowPopup(true);
      alert('✅ Your message has been sent successfully!');
      setTimeout(() => setShowPopup(false), 4000);
      setFormData({ name: '', email: '', message: '' });

    } catch (err) {
      console.error('Google Sheet submission failed:', err);
      alert('❌ Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="Contact" className="py-20 bg-black text-white relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500">Contact</span> Me
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Want to work together, collaborate on a project, or just say hi? Drop a message below!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="grid gap-6 max-w-xl mx-auto text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-500"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300"
          >
            <FaPaperPlane /> Send Message
          </button>
        </motion.form>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed bottom-10 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
          >
            ✅ Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
