import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">The Port Service</span>
        </Link>

        {/* Menu */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/services" className="hover:text-gray-400">Servizi</Link>
          <Link href="/booking" className="hover:text-gray-400">Prenotazioni</Link>
          <Link href="/contact" className="hover:text-gray-400">Contatti</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
