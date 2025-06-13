import { Wrench, RefreshCcw, Wind, Ruler } from "lucide-react";

export default function Services() {
  return (
    <section className="bg-gray-100 rounded-3xl py-16 px-6 max-w-7xl mx-auto">
      {/* TÍTULO */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Serviços <span className="text-orange-500">Especializados</span>
        </h2>
        <p className="text-gray-600 max-w-xl">
          Oferecemos uma gama completa de soluções em climatização para atender
          suas necessidades com qualidade e eficiência.
        </p>
      </div>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* CARD 1 - Instalação */}
        <div className="bg-orange-500 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4">
            <Wrench className="text-orange-500 w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold mb-1">
            Instalação de Climatizadores
          </h3>
          <p className="text-sm">
            Garantimos a instalação eficiente e segura dos seus equipamentos de
            climatização.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition-transform duration-300">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-4">
            <RefreshCcw className="text-orange-500 w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Manutenção Preventiva</h3>
          <p className="text-sm text-gray-600">
            Evite problemas futuros e aumente a vida útil com manutenções
            periódicas.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition-transform duration-300">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-4">
            <Wind className="text-orange-500 w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Higienização e Limpeza</h3>
          <p className="text-sm text-gray-600">
            Serviço completo de limpeza e higienização, garantindo qualidade do
            ar.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition-transform duration-300">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-4">
            <Ruler className="text-orange-500 w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold mb-1">
            Projetos de Climatização
          </h3>
          <p className="text-sm text-gray-600">
            Planejamento ideal para residências e comércios, com foco em
            desempenho e economia.
          </p>
        </div>

        {/* BLOCO DE VÍDEO */}
        <div className="col-span-full lg:col-span-2">
          <div className="relative w-full h-52 sm:h-64 bg-gray-300 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-12 h-12 bg-white text-orange-500 rounded-full shadow-md flex items-center justify-center hover:ring-2 hover:ring-orange-400 transition">
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
