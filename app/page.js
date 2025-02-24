'use client';

import Image from "next/image";
import Navbar from "./components/Navbar";
import Form from './components/Form';
import { motion, useAnimation } from "framer-motion";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-wallpaper_dark">
        <Navbar/>
      {/* Hero Section */}
      <section className="relative mb-10 w-full h-screen flex items-center justify-start bg-[url('/left-uncropped.jpeg')] bg-cover bg-center">
        <div className="relative z-10 max-w-4xl mr-auto px-20">
          <AnimatedText text="Scopri i nostri servizi"
          cname={"text-5xl font-elegant text-dark mb-5"}
          />

          <Link href="#services">
          <motion.button
          className="px-6 py-3 bg-transparent border-white border-2 text-white rounded-full shadow-lg hover:bg-secondary"
          initial={{ opacity: 0, x: -100 }} // Parte fuori dallo schermo a sinistra
          whileInView={{ opacity: 1, x: 0 }} // Entra scorrendo
          transition={{ duration: 1 }}
          viewport={{ once: false }} // L'animazione non avviene solo una volta
          >
              Scopri
          </motion.button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-5 w-[95%] mx-auto bg-primary rounded-lg">
        <Form/>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, image }) {
  return (
    <div className="relative w-full h-72 bg-white rounded-lg shadow-lg overflow-hidden">
      <Image src={image} alt={title} layout="fill" objectFit="cover" className="absolute inset-0" />
      <div className="relative z-10 p-6 bg-black/50 text-white flex flex-col justify-end h-full">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg mt-2">{description}</p>
      </div>
    </div>
  );
}
