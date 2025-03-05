"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// DELETE THIS FILE LATER!!!
export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bottone per aprire il modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all"
      >
        Prenota Ora
      </button>

      {/* Overlay e Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()} // Evita la chiusura cliccando dentro
          >
            <h2 className="text-xl font-semibold mb-4">Prenota il tuo veicolo</h2>

            {/* Il tuo form */}
            <form className="space-y-4">
              <input type="text" name="name" placeholder="Nome" className="w-full p-2 border rounded-md" required />
              <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-md" required />
              <input type="tel" name="phone" placeholder="Telefono" className="w-full p-2 border rounded-md" required />
              <input type="date" name="date" className="w-full p-2 border rounded-md" required />
              <input type="time" name="time" className="w-full p-2 border rounded-md" required />
              <textarea name="details" placeholder="Dettagli aggiuntivi" className="w-full p-2 border rounded-md"></textarea>

              <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-all">
                Invia Prenotazione
              </button>
            </form>

            {/* Bottone di chiusura */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full text-gray-500 hover:text-gray-700"
            >
              Chiudi
            </button>
          </motion.div>
        </motion.div>
      )}

<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
     onClick={onClose} // Chiude il form se si clicca fuori
>
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full transform transition-all scale-95 opacity-0 animate-fadeIn"
         onClick={(e) => e.stopPropagation()} // Evita che il click dentro chiuda il form
    > 
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Prenota un servizio
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Nome" className="w-full p-2 border rounded-md text-black placeholder-gray-800" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-md text-black placeholder-gray-800" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Telefono" className="w-full p-2 border rounded-md text-black placeholder-gray-800" onChange={handleChange} required />
            <input type="date" name="date" className="w-full p-2 border rounded-md text-black placeholder-gray-800" onChange={handleChange} required />
            <input type="time" name="time" className="w-full p-2 border rounded-md text-black placeholder-gray-800" onChange={handleChange} required />
            <textarea name="details" placeholder="Dettagli aggiuntivi" className="w-full p-2 border rounded-md text-black placeholder-gray-800" onChange={handleChange}></textarea>

            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition-all">
                Prenota
            </button>
        </form>
    </div>
</div>

    </>
  );
}
