import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Henrique",
      location: "São Paulo - SP",
      message:
        "Ficamos impressionados com a qualidade da instalação dos climatizadores. Profissionais atenciosos e serviço impecável.",
    },
    {
      name: "Mariana Souza",
      location: "Curitiba - PR",
      message:
        "Atendimento rápido, manutenção eficiente e ótimo custo-benefício. Recomendo a todos que buscam conforto térmico.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* IMAGEM ILUSTRATIVA */}
        <div className="flex-1 w-full">
          <Image
            src="/images/image-8.jpg"
            alt="Clientes satisfeitos"
            width={500}
            height={320}
            className="w-full h-64 sm:h-80 rounded-xl object-cover"
          />
        </div>

        {/* CONTEÚDO */}
        <div className="flex-1 w-full">
          <p className="text-sm text-orange-500 font-medium mb-2">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug mb-10">
            <span className="text-orange-500">500+</span> Clientes satisfeitos
            <br />
            aprovaram nosso trabalho
          </h2>

          {/* CARDS */}
          <div className="flex sm:flex-row gap-6">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="relative bg-white rounded-xl p-6 shadow hover:shadow-lg transition duration-300 flex-1"
              >
                {/* Ícone decorativo */}
                <Quote className="absolute top-4 right-4 w-6 h-6 text-orange-100" />

                {/* Depoimento */}
                <p className="text-sm text-gray-700 mb-6">{item.message}</p>

                {/* Linha divisória */}
                <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                  {/* Avatar fake */}
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center text-sm">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
