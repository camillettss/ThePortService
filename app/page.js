import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">Benvenuto su The Port Service</h1>
        <p className="mt-4">Offriamo servizi di noleggio, transfer, lavanderia e molto altro.</p>
      </main>
    </div>
  );
}
