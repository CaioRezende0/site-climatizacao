export default function AboutUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* TÍTULO */}
      <p className="text-base sm:text-lg font-medium text-orange-500 mb-2">
        Sobre nós
      </p>
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight max-w-3xl">
        Elevando o Conforto dos Seus Espaços com Climatização Inteligente
      </h2>

      {/* CONTEÚDO */}
      <div className="mt-10 flex flex-col lg:flex-row gap-10 items-start">
        {/* IMAGEM */}
        <div className="flex-1 w-full">
          <div className="w-full h-60 sm:h-80 md:h-96 bg-gray-300 rounded-2xl transition-transform duration-300 hover:scale-105" />
        </div>

        {/* TEXTO LATERAL */}
        <div className="flex-1 w-full space-y-5">
          <h3 className="text-orange-500 text-sm font-bold uppercase tracking-wide">
            Compromisso com o Conforto
          </h3>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            {[
              "Instalação",
              "Manutenção",
              "Limpeza",
              "Eficiência",
              "Tecnologia",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-all duration-200 hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* PARÁGRAFO */}
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Nossa missão é transformar ambientes através de soluções em
            climatização, aliando tecnologia, qualidade técnica e atendimento
            especializado para oferecer conforto e bem-estar.
          </p>
        </div>
      </div>
    </section>
  );
}
