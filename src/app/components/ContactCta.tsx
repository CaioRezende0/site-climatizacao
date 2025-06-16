export default function ContactCta() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gray-50 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* TEXTO + FORMULÁRIO */}
        <div className="flex-1">
          <p className="text-sm text-orange-500 font-medium mb-2">
            Fale com a gente
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Peça um <span className="text-orange-500">Orçamento</span>{" "}
            Personalizado
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Informe seu e-mail para receber atendimento personalizado em
            instalação, manutenção ou higienização de climatizadores.
          </p>

          {/* FORMULÁRIO */}
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Solicitar Orçamento
            </button>
          </form>

          {/* RODAPÉ COM ALTERNATIVA */}
          <p className="text-xs text-gray-500 mt-4">
            Ou fale direto conosco via{" "}
            <a
              href="https://wa.me/SEUNUMEROAQUI"
              target="_blank"
              className="text-orange-500 font-medium hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>

        {/* BLOCO ILUSTRATIVO */}
        <div className="w-full sm:w-64 h-48 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500 text-sm">
          Imagem de climatização aqui
        </div>
      </div>
    </section>
  );
}
