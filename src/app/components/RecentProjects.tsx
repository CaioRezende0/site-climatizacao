import { ArrowRight } from "lucide-react";

export default function RecentProjects() {
  const projects = [
    {
      title: "Instalação em Condomínio",
      description: "Climatização completa em áreas comuns e apartamentos.",
    },
    {
      title: "Projeto Comercial Sob Medida",
      description: "Sistema inteligente para ambientes de grande circulação.",
    },
    {
      title: "Manutenção Programada em Clínica",
      description:
        "Climatização higiênica e contínua para atendimento de saúde.",
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* TÍTULO */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-orange-500">Projetos</span> Recentes
      </h2>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-b from-neutral-600 to-black text-white p-6 rounded-xl shadow-md w-[90%] sm:w-72 h-80 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ${
              index === 1 ? "md:-translate-y-8" : ""
            }`}
          >
            <div>
              <h3 className="text-base font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                aria-label="Ver detalhes do projeto"
                className="p-2 rounded-full hover:bg-white/10 transition"
              >
                <ArrowRight className="w-5 h-5 text-white transition group-hover:text-orange-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
