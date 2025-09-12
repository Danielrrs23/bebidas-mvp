import Link from 'next/link'
export default function Home(){
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sunny rounded-full flex items-center justify-center font-bold text-primary">C</div>
            <div>
              <div className="text-sm text-gray-600">Entrega em</div>
              <div className="font-semibold">Rua Coronel João Vieira, 190</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-gray-100">👤</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <input placeholder="Busque por Churrasco, Heineken, Coca..." className="w-full p-4 rounded-xl border border-gray-200 shadow-sm" />
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">VAI DE QUÊ HOJE?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
              <div> Cervejas </div>
              <img src="/images/heineken-350.png" alt="cerveja" className="w-16 h-16 object-contain" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
              <div> Destilados </div>
              <img src="/images/layout-sample.jpg" alt="dest" className="w-16 h-16 object-contain" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
              <div> Vinhos </div>
              <img src="/images/pergola-vinho.png" alt="vinho" className="w-16 h-16 object-contain" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
              <div> Churrasco </div>
              <img src="/images/layout-sample.jpg" alt="churr" className="w-16 h-16 object-contain" />
            </div>
          </div>
        </section>

        <section className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Recomendados para você</h2>
            <Link href="/catalogo"><a className="text-sm text-gray-600">Ver todos →</a></Link>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <article className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <img src="/images/heineken-350.png" className="w-36 h-36 object-contain mb-3" alt="Heineken"/>
              <h3 className="font-semibold">Heineken 350ml</h3>
              <p className="text-gray-600">R$ 4.99</p>
              <Link href="/catalogo"><a className="mt-3 bg-primary text-white px-4 py-2 rounded-lg">Pedir</a></Link>
            </article>
            <article className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <img src="/images/coca-350.png" className="w-36 h-36 object-contain mb-3" alt="Coca"/>
              <h3 className="font-semibold">Coca-Cola 350ml</h3>
              <p className="text-gray-600">R$ 3.99</p>
              <Link href="/catalogo"><a className="mt-3 bg-primary text-white px-4 py-2 rounded-lg">Pedir</a></Link>
            </article>
            <article className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <img src="/images/pergola-vinho.png" className="w-36 h-36 object-contain mb-3" alt="Vinho"/>
              <h3 className="font-semibold">Vinho Pérgola Tinto Suave</h3>
              <p className="text-gray-600">R$ 29.90</p>
              <Link href="/catalogo"><a className="mt-3 bg-primary text-white px-4 py-2 rounded-lg">Pedir</a></Link>
            </article>
          </div>
        </section>
      </main>
      <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-white shadow-lg rounded-full px-6 py-3 flex items-center gap-4">
          <div className="font-semibold">🛒 0 itens</div>
          <div className="text-sm text-gray-600">R$ 0.00</div>
        </div>
      </footer>
    </div>
  )
}
