import { CheckCircle } from "lucide-react";

export default function WhoWeAre() {
  return (
    <div className="relative">
      {/* CURVAS DECORATIVAS */}
      <div className="hidden md:block absolute -left-40 top-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full border-2 border-orange-400 pointer-events-none z-0" />

      <section className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* IMAGEM */}
        <div className="flex-1 z-10 w-full">
          <div className="w-full h-52 sm:h-72 md:h-80 lg:h-96 bg-gray-300 rounded-xl transition-transform hover:scale-105 duration-300" />
        </div>

        {/* TEXTO */}
        <div className="flex-1 space-y-6 z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            <span className="text-orange-500">Quem</span> Somos Nós
            <span className="text-orange-500">?</span>
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            Somos especializados em oferecer soluções completas em climatização,
            com foco em qualidade, eficiência e conforto para ambientes
            residenciais, comerciais e industriais.
          </p>

          <ul className="space-y-3 text-base text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 w-5 h-5 mt-1 shrink-0" />
              Garantir bem-estar térmico com tecnologia de ponta
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 w-5 h-5 mt-1 shrink-0" />
              Atender com agilidade e compromisso
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 w-5 h-5 mt-1 shrink-0" />
              Proporcionar ambientes mais saudáveis e agradáveis
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
