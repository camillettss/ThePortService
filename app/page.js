'use client';
import Navbar from "./components/Navbar";
import GenericModal from "./components/GenericModal";
import { motion, useAnimation } from "framer-motion";
import AnimatedText from "./components/AnimatedText";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-wallpaper_dark">
      <Navbar />
      {/* Hero Section */}
      <section className="relative mb-10 w-full h-screen flex items-center justify-start bg-[url('/left-uncropped.jpeg')] bg-cover bg-center">
        <div className="relative z-10 max-w-4xl mr-auto px-20">
          <GenericModal isOpen={isOpen} onClose={() => {setIsOpen(false)}} m_href={0}/>
          <AnimatedText text="Scopri i nostri servizi"
            cname={"text-5xl font-elegant text-dark mb-5"}
          />

          <motion.button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-transparent border-white border-2 text-white rounded-full shadow-lg hover:bg-secondary"
            initial={{ opacity: 0, x: -100 }} // Parte fuori dallo schermo a sinistra
            whileInView={{ opacity: 1, x: 0 }} // Entra scorrendo
            transition={{ duration: 1 }}
            viewport={{ once: false }} // L'animazione non avviene solo una volta
          >
            Scopri
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-5 w-[95%] mx-auto bg-primary rounded-lg">
        
      </section>
    </div>
  );
}
