'use client';
import { useState } from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

// m_href: 0=rent , 1=NCC, 2=bags, 3=sart/lav
export default function GenericModal({ isOpen, onClose, m_href }) {
    if (!isOpen) return null;

    const router = useRouter();


    const m_Pref = [
        "/rent"
    ]

    const m_Titles = [
        "Prenota il tuo veicolo",
        "Prenota un passaggio",
        "Deposita dei bagagli",
        "Contattaci"]

    const m_Buttons = [
        "Cerca",
        "Cerca",
        "Controlla disponibilità",
        "Scopri"
    ]

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
        setIsSubmitting(true); // Disabilitando il pulsante

        const queryString = new URLSearchParams(formData).toString();

        // Reindirizza alla pagina /rent con i dati
        router.push(`/rent?${queryString}`);

        // PRENOTA
        // ----------------------------------------------------------
        /*const response = await fetch("/api/booking", {
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
        }*/
        // -----------------------------------------------------------

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
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50 h-screen pt-20"
            onClick={onClose}>
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full max-h-[80vh]"
                onClick={(e) => e.stopPropagation()} // allow click interni
            >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{m_Titles[m_href]}</h2>

                <form onSubmit={handleSubmit} className="space-y-2">
                    <input type="text" name="name" placeholder="Nome" className="w-full p-2 border rounded-md text-black placeholder-gray-800" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-md text-black placeholder-gray-800" onChange={handleChange} required />
                    <input type="tel" name="phone" placeholder="Telefono" className="w-full p-2 border rounded-md text-black placeholder-gray-800" onChange={handleChange} />
                    <input type="date" name="date" className="w-full p-2 border rounded-md text-black placeholder-gray-800" onChange={handleChange} required />
                    <textarea name="details" placeholder="Dettagli aggiuntivi" className="w-full p-2 border rounded-md text-black placeholder-gray-800" onChange={handleChange}></textarea>

                    <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition-all">
                        {m_Buttons[m_href]}
                    </button>
                </form>
            </div>
        </div>
    );
}