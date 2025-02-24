'use client';

import { useState } from 'react';
import { Resend } from 'resend';

const Form = () => {
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
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Prenota un servizio</h2>
        
        <div className="flex justify-center gap-3 mb-4">
          {['rental', 'laundry', 'transfer'].map((option) => (
            <button
              key={option}
              className={`px-4 py-2 rounded-md font-semibold transition-all ${
    service === option ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'
  }`}
              onClick={() => setService(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

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
  );
}

export default Form;