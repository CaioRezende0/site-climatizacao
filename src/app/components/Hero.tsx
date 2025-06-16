"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 flex flex-col lg:flex-row items-center gap-12">
      {/* ESQUERDA */}
      <div className="flex-1 w-full">
        {/* TÍTULO */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800">
          Climatizando Seus Ambientes com <br />
          <span className="text-orange-500">Eficiência</span> e{" "}
          <span className="text-orange-500">Conforto</span>
        </h1>

        {/* AÇÕES */}
        <div className="flex items-center gap-4 mt-6 flex-wrap">
          <button className="flex items-center gap-2 bg-gray-100 text-sm px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-200">
            Solicitar orçamento <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm">
            +2.000 Clientes Atendidos
            <div className="flex items-center -space-x-2">
              <div className="w-5 h-5 bg-gray-300 rounded-full border-2 border-white" />
              <div className="w-5 h-5 bg-gray-400 rounded-full border-2 border-white" />
              <div className="w-5 h-5 bg-gray-500 rounded-full border-2 border-white" />
              <div className="w-5 h-5 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                +
              </div>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap gap-4 mt-10">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-4 w-full sm:w-72 max-w-xs flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition duration-200">
            <p className="text-sm font-semibold text-gray-800">
              Instalação com garantia e profissionais qualificados
            </p>
            <div className="flex mt-4 gap-2">
              <Image
                src="/images/sala-ar.jpg"
                alt="Imagem climatização"
                width={20}
                height={20}
                className="rounded-3xl w-full object-cover"
              />
              <div className="w-1/2 h-20 bg-gray-200 rounded-lg" />
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mt-4 hover:bg-orange-500 transition">
              <ArrowUpRight className="text-white w-4 h-4" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-4 w-full sm:w-72 max-w-xs flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition duration-200">
            <p className="text-sm font-semibold text-gray-800">
              Manutenção preventiva para garantir o melhor desempenho
            </p>
            <div className="flex mt-4 gap-2">
              <div className="w-1/2 h-20 bg-gray-300 rounded-lg" />
              <div className="w-1/2 h-20 bg-gray-200 rounded-lg" />
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mt-4 hover:bg-orange-500 transition">
              <ArrowUpRight className="text-white w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* DIREITA */}
      <div className="flex-1 w-full">
        {/* Substitua por uma imagem real se desejar */}
        <div className="w-full h-64 sm:h-80 md:h-[400px] rounded-3xl bg-gray-300" />
        {/* <Image
          src="/capa-ar-condicionado.png"
          alt="Imagem climatização"
          width={500}
          height={400}
          className="rounded-3xl w-full object-cover"
        /> */}
      </div>
    </section>
  );
}
