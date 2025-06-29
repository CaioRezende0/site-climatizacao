"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-gray-100 rounded-full shadow-md px-6 py-3 mt-6 max-w-7xl mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
      </div>

      {/* Navegação desktop */}
      <nav className="hidden md:flex flex-1 mx-10">
        <ul className="flex justify-center gap-8 text-sm font-medium">
          <li>
            <a href="#home" className="text-black font-semibold">
              Início
            </a>
          </li>
          <li>
            <a
              href="#servicos"
              className="text-gray-400 hover:text-black transition"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              className="text-gray-400 hover:text-black transition"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-gray-400 hover:text-black transition"
            >
              Portfólio
            </a>
          </li>
          <li>
            <a
              href="#depoimentos"
              className="text-gray-400 hover:text-black transition"
            >
              Depoimentos
            </a>
          </li>
        </ul>
      </nav>

      {/* Botão mobile */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full bg-gray-100 rounded-b-xl shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 text-sm font-medium">
            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="text-black font-semibold"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-black transition"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-black transition"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-black transition"
              >
                Portfólio
              </a>
            </li>
            <li>
              <a
                href="#depoimentos"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-black transition"
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="text-orange-500 font-semibold"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Ações */}
      <div className="hidden md:flex items-center gap-3">
        <a className="bg-orange-500 text-white font-bold px-5 py-2 rounded-full text-sm hover:scale-105 hover:bg-orange-600 transition-all cursor-pointer">
          Contato
        </a>
      </div>
    </header>
  );
}
