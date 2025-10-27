"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/concept", label: "Our Concept" },
    { href: "/howitworks", label: "How It Works" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const forestGreen = "#2F3E2F";

  return (
    <header className="flex items-center justify-between w-full px-8 py-4 fixed top-0 left-0 z-50 bg-gradient-to-r from-[#f5f0e6] to-[#e6e1d8] shadow-md">
      {/* Logo + tagline */}
      <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
        <Image src="/logo1.png" alt="Logo" width={50} height={50} />
        <span
          className="text-lg md:text-xl font-light tracking-wide"
          style={{
            color: forestGreen,
            fontFamily: "'Outfit', 'Inter', sans-serif",
          }}
        >
          Nordic modular houses, delivered ready-to-use
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${
              pathname === item.href
                ? "text-gray-900 font-semibold border-b-2 border-gray-700"
                : "text-gray-700 hover:text-gray-900"
            } transition`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
