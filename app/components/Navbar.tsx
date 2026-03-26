import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4">
      <ul className="flex gap-8 list-none m-0 p-0">
        <li>
          <Link href="/" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link href="/products" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
            Products
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
