import React, { useState } from "react";
import { Phone, MessageCircle, MoveRight, MoveLeft } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function RealConnect() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* Floating Menu */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col items-center gap-3">
        
        {/* Expandable Options */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3 mb-3"
            >
              {/* Call Button */}
              <a
                href="tel:+916392554947"
                className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full shadow-lg flex items-center justify-center text-white"
              >
                <Phone size={24} />
              </a>

              {/* Message Button */}
              <a
                href="sms:+916392554947"
                className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center text-white"
              >
                <MessageCircle size={24} />
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/916392554947"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white"
              >
                <FaWhatsapp size={24} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button with Arrow */}
        <motion.button
          onClick={() => setOpenMenu(!openMenu)}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center text-white"
        >
          {openMenu ? <MoveRight size={28} /> : <MoveLeft size={28} />}
        </motion.button>
      </div>
    </>
  );
}
