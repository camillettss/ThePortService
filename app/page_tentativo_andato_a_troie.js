"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion, useAnimation } from "framer-motion";
import AnimatedText from "./components/AnimatedText";

export default function Home() {
  return (
    <div className="min-h-screen bg-wallpaper">
        <Navbar/>
      {/* Hero Section */}
      <section className="relative w-full h-full flex flex-col items-center justify-start mb-10">
        <section>
          <AnimatedText text="Scopri i nostri servizi" cname={"text-5xl font-elegant text-dark"} />
          <div className="w-[600px] h-[500px] bg-[url('/hero-microsoftAI.jpeg')] bg-contain bg-no-repeat bg-center"/>
        </section>
        {/*Services */}
        <section id="Services" className="grid grid-cols-3 md:grid-cols-3 gap-10 mx-auto">
        <ServiceCd image="/Icon-Rental.png" title="Noleggio"/>
        <ServiceCd image="/Icon-Transfer.png" title="Transfer"/>
        <ServiceCd image="/Icon-Laundry.png" title="Lavanderia"/>
        </section>
      {/*<div className="relative z-10 max-w-4xl mr-auto px-20">
          <AnimatedText text="Scopri i nostri servizi"
          cname={"text-5xl font-elegant text-dark mb-5"}
          />

          <motion.button
          className="px-6 py-3 bg-transparent border-white border-2 text-white rounded-full shadow-lg"
          initial={{ opacity: 0, x: -100 }} // Parte fuori dallo schermo a sinistra
          whileInView={{ opacity: 1, x: 0 }} // Entra scorrendo
          transition={{ duration: 1 }}
          viewport={{ once: false }} // L'animazione non avviene solo una volta
          >
              Scopri
          </motion.button>
  </div>*/}
      </section>

      {/* introduction Section */}
      <section id="Intro" className="mb-5 w-[95%] mx-auto bg-wallpaper_darker rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-12">I nostri servizi</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-5xl mx-auto">
          <ServiceCard
            title="Noleggio"
            description="Offriamo noleggio attrezzature e mezzi di qualità."
            image="/noleggio.jpg"
          />
          <ServiceCard
            title="Trasporto"
            description="Trasportiamo qualsiasi tipo di merce in modo sicuro e veloce."
            image="/trasporto.jpg"
          />
          <ServiceCard
            title="Lavanderia"
            description="Servizi di lavanderia e stireria professionale per ogni esigenza."
            image="/lavanderia.jpg"
          />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, image }) {
  return (
    <div className="relative w-50 h-50 bg-white rounded-lg shadow-lg overflow-hidden">
      <Image src={image} alt={title} layout="fill" objectFit="cover" className="absolute inset-0" />
      <div className="relative z-10 p-6 bg-black/50 text-white flex flex-col justify-end h-full">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg mt-2">{description}</p>
      </div>
    </div>
  );
}

const ServiceCd = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      {/* Contenitore dell'icona */}
      <div className="w-24 h-24 bg-gray-200 rounded-full flex justify-center items-center shadow-md">
        <img src={image} alt={title} className="w-16 h-16 object-contain" />
      </div>
      {/* Titolo sotto */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
};
