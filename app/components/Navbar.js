"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setSmall(true);
      } else {
        setSmall(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        small ? "h-10 bg-primary shadow" : "h-16 bg-transparent backdrop-blur-md"
      } flex items-center px-6`}
    >
      <div className="mx-auto space-x-9">
        <Link href="/noleggio" className="text-white-700 hover:text-white">
          Noleggio
        </Link>
        <Link href="/trasporto" className="text-white-700 hover:text-white">
          Trasporto
        </Link>
        <Link href="/lavanderia" className="text-white-700 hover:text-white">
          Lavanderia
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
