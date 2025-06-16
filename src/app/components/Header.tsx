"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="bg-gray-100 rounded-full shadow-md px-6 py-3 mt-6 max-w-7xl mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
      </div>

      {/* Navegação */}
      <nav className="flex-1 mx-10">
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

      {/* Ações */}
      <div className="flex items-center gap-3">
        <a className="bg-orange-500 text-white font-bold px-5 py-2 rounded-full text-sm hover:scale-105 hover:bg-orange-600 transition-all cursor-pointer">
          Contato
        </a>

        <button
          className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 transition"
          onClick={() => setDarkMode(!darkMode)}
        >
          {/* Futuro ícone de tema */}
        </button>
      </div>
    </header>
  );
}
