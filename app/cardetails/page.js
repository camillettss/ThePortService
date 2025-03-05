"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CarDetailsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Recupero i parametri dalla URL
  const carId = searchParams.get("car");
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const date = searchParams.get("date");
  const price = searchParams.get("price");

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true); // Stato di caricamento

  useEffect(() => {
    setLoading(true); // Imposta il caricamento all'inizio
    fetch(`/api/cars/details?id=${carId}`)
      .then((res) => res.json())
      .then((data) => {
        setCar({
          id: carId,
          name: data.name,
          pricePerDay: price,
          image: data.image,
          desc: data.desc
        }); // Aggiorna lo stato con i dati ricevuti
        setLoading(false); // Disattiva il caricamento
      })
      .catch((error) => {
        console.error("Errore nel caricamento delle auto:", error);
        setLoading(false); // Anche in caso di errore, togliamo il loading
      });
  }, [date]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dettagli dell'auto</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <img src={car.image} alt={car.name} className="w-full h-60 object-cover rounded-md" />
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">{car.name}</h2>
        <p className="text-gray-600">{car.seats} posti - {car.transmission}</p>
        <p className="text-gray-600">Bagagli: {car.luggage}</p>
        <p className="text-gray-600">Ritiro e Consegna: {car.location}</p>

        <div className="bg-gray-50 p-4 mt-4 rounded-lg">
          <h3 className="text-lg font-semibold">Dettaglio prezzi</h3>
          <p className="text-gray-600">Prezzo per 1 giorno: €{car.pricePerDay}</p>
        </div>

        <button
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition-all"
          onClick={() => router.push(`/checkout?name=${name}&email=${email}&date=${date}&car=${carId}&price=${price}`)}
        >
          Conferma Prenotazione
        </button>
      </div>
    </div>
  );
}
