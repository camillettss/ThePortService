import Link from "next/link";

export default function Button({ href, children }) {
  return (
    <Link
      href={href}
      className="bg-primary border-2 border-white-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-secondary transition-all inline-block"
    >
      {children}
    </Link>
  );
}
