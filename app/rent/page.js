"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function RentPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Recupero i parametri dalla URL
    //const name = searchParams.get("name");
    const name = "fra";
    //const email = searchParams.get("email");
    const email = "email";
    const date = searchParams.get("date");

    // Stato per le auto disponibili (da sostituire con dati reali)
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true); // Stato di caricamento

    useEffect(() => {
        setLoading(true); // Imposta il caricamento all'inizio
        fetch(`/api/cars/available?date=${date}`)
            .then((res) => res.json())
            .then((data) => {
                setCars(data); // Aggiorna lo stato con i dati ricevuti
                setLoading(false); // Disattiva il caricamento
            })
            .catch((error) => {
                console.error("Errore nel caricamento delle auto:", error);
                setLoading(false); // Anche in caso di errore, togliamo il loading
            });
    }, [date]);

    /*useEffect(() => { //   QUESTO E' SENZA CARICAMENTO
      if (!date) return; // Se non c'è una data, non facciamo nulla
    
      async function fetchCars() {
          try {
            const res = await fetch(`/api/cars/available?date=${date}`);
            const data = await res.json();
            setCars(data);
          } catch (error) {
            console.error("Errore nel caricamento delle auto:", error);
          }
        }
    
      fetchCars();
    }, [date]); // Ricarica i dati se la data cambia */


    // Funzione per selezionare un'auto e passare alla fase successiva
    const handleSelectCar = (car) => {
        const queryString = new URLSearchParams({
          name,
          email,
          date,
          car: car.id,
          price: car.pricePerDay,
        }).toString();
      
        router.push(`/cardetails?${queryString}`);
      };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Auto disponibili</h1>

            {loading ? (
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                </div>
            ) : cars.length === 0 ? (
                <p className="text-gray-600">Nessuna auto disponibile per questa data.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    console.log("Dati ricevuti:", cars);
                    {cars.map((car) => (
                        <div key={car.id} className="bg-white shadow-md rounded-lg p-4">
                            <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-md" />
                            <h2 className="text-xl font-semibold text-gray-800 mt-2">{car.name}</h2>
                            <p className="text-gray-600">€{car.pricePerDay} al giorno</p>
                            <button
                                onClick={() => handleSelectCar(car)}
                                className="mt-3 w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition-all"
                            >
                                Seleziona
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
