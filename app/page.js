import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      {/* HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-20">
        <div className="max-w-2xl text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Benvenuto su Soleverde
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Offriamo prodotti agricoli di qualità nel rispetto della natura.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Scopri di più
          </button>
        </div>
        <div className="relative w-full lg:w-1/2 h-80 mt-10 lg:mt-0">
          <Image 
            src="/hero-image.jpg" // Inserirai l'immagine corretta
            alt="Immagine aziendale"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* SERVIZI */}
      <section className="px-6 lg:px-16 py-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          I Nostri Servizi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Ortaggi Freschi", "Uova Bio", "Allevamento", "Consegne a Km 0"].map((servizio, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-gray-800">{servizio}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


const services = [
  { title: "Noleggio Auto", description: "Veicoli comodi per ogni tua esigenza.", link: "/noleggio-auto" },
  { title: "Servizio Taxi", description: "Trasporto rapido e sicuro.", link: "/servizio-taxi" },
  { title: "Prenotazione Hotel", description: "Troviamo la sistemazione perfetta per te.", link: "/prenotazione-hotel" },
];
