import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/your-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Benvenuto su The Port Service</h1>
          <p className="text-lg max-w-2xl mx-auto">Offriamo servizi su misura per soddisfare ogni tua esigenza.</p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">I Nostri Servizi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a key={index} href={service.link} className="block bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </a>
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
