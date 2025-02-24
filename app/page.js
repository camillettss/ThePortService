'use client';

import { useState } from 'react';
import { Resend } from 'resend';
import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion, useAnimation } from "framer-motion";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";

export default function Home() {
  const [service, setService] = useState('rental');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return; // Evita doppi invii
    setIsSubmitting(true); // Disabilita il pulsante

    const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
        alert("Prenotazione salvata con successo!");
    } else {
        alert("Errore nella prenotazione");
    }

    {/*const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // formData contiene i dati del form
    });

    const result = await response.json();
    if (result.success) {
        alert('Prenotazione inviata con successo!');
    } else {
        alert('Errore durante l’invio della prenotazione.');
    }*/}
  };

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
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Prenota un servizio</h2>
        
        <div className="flex justify-center gap-3 mb-4">
          {['Noleggio', 'Lavanderia', 'Transfer'].map((option) => (
            <button
              key={option}
              className={`px-4 py-2 rounded-md font-semibold transition-all ${
              service === option ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setService(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Nome" className="w-full p-2 border rounded-md" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-md" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Telefono" className="w-full p-2 border rounded-md" onChange={handleChange} required />
          <input type="date" name="date" className="w-full p-2 border rounded-md" onChange={handleChange} required />
          <input type="time" name="time" className="w-full p-2 border rounded-md" onChange={handleChange} />
          <textarea name="details" placeholder="Dettagli aggiuntivi" className="w-full p-2 border rounded-md" onChange={handleChange}></textarea>

          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition-all">
            Prenota
          </button>
        </form>
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
