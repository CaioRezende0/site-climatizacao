import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* LOGO + DESCRIÇÃO */}
        <div>
          <div className="mb-4">
            {/* Substitua por <Image src="/logo.svg" alt="ClimaPro" width={100} height={40} /> */}
            <span className="text-orange-500 font-extrabold text-2xl tracking-tight">
              ClimaPro
            </span>
          </div>
          <p className="text-gray-500 leading-relaxed text-sm max-w-xs">
            Soluções em climatização com qualidade, eficiência e compromisso com
            o seu conforto.
          </p>
        </div>

        {/* SERVIÇOS */}
        <nav aria-label="Serviços">
          <h4 className="text-gray-900 font-semibold mb-3">Serviços</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Instalação
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Manutenção
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Higienização
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Projetos Personalizados
              </a>
            </li>
          </ul>
        </nav>

        {/* INSTITUCIONAL */}
        <nav aria-label="Institucional">
          <h4 className="text-gray-900 font-semibold mb-3">Institucional</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </nav>

        {/* CONTATO */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">Fale Conosco</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-500" />
              <a
                href="https://wa.me/SEUNUMEROAQUI"
                className="hover:text-orange-500 transition"
              >
                (11) 99999-9999
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-500" />
              <a
                href="mailto:contato@climapro.com"
                className="hover:text-orange-500 transition"
              >
                contato@climapro.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>São Paulo - SP</span>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} ClimaPro. Todos os direitos reservados.
      </div>
    </footer>
  );
}
