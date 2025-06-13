export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center sm-grid-cols-4 gap-20 text-center">
          {/* ITEM 1 */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900">20</h3>
            <p className="text-sm text-gray-500 mt-1">Anos de Experiência</p>
          </div>
          {/* Item 2 */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900">296</h3>
            <p className="text-sm text-gray-500 mt-1">Empresas Atendidas</p>
          </div>

          {/* Item 3 */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900">36</h3>
            <p className="text-sm text-gray-500 mt-1">
              Especialistas na Equipe
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900">106K+</h3>
            <p className="text-sm text-gray-500 mt-1">Clientes Satisfeitos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
