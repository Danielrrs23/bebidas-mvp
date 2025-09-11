import { useState, useEffect } from 'react'
const initialProducts = [
  { id: 1, nome: 'Cerveja Pilsen', preco: 6.90, imagem: '/cerveja.svg' },
  { id: 2, nome: 'Vinho Tinto', preco: 39.90, imagem: '/vinho.svg' },
  { id: 3, nome: 'Refrigerante Cola', preco: 7.50, imagem: '/cola.svg' },
]
export default function Catalogo() {
  const [produtos] = useState(initialProducts)
  const [carrinho, setCarrinho] = useState([])
  const [animate, setAnimate] = useState(false)
  useEffect(() => { if (animate) { const t = setTimeout(() => setAnimate(false), 400); return () => clearTimeout(t) } }, [animate])
  const adicionar = (p) => { setCarrinho(c => [...c, p]); setAnimate(true) }
  const remover = (index) => { setCarrinho(c => { const n = [...c]; n.splice(index,1); return n }) }
  const total = carrinho.reduce((s, i) => s + i.preco, 0)
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <header className="bg-gradient-to-r from-primary to-accent text-white py-4 shadow">
        <div className="max-w-6xl mx-auto px-4"><h1 className="text-3xl font-bold">🍹 CUMê Água</h1></div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Catálogo de Bebidas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {produtos.map(p => (
              <article key={p.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:scale-102 transition-transform">
                <img src={p.imagem} alt={p.nome} className="w-32 h-32 object-contain mb-3"/>
                <h3 className="font-bold text-lg">{p.nome}</h3>
                <p className="text-gray-700">R$ {p.preco.toFixed(2)}</p>
                <button onClick={() => adicionar(p)} className="mt-3 bg-sunny text-primary px-4 py-2 rounded-lg font-semibold hover:bg-accent transition">Adicionar</button>
              </article>
            ))}
          </div>
        </section>
        <aside className="bg-white p-4 rounded-xl shadow sticky top-6">
          <h2 className="text-xl font-bold mb-3">🛒 Seu Carrinho</h2>
          {carrinho.length === 0 ? <p className="text-gray-500">Nenhum item adicionado.</p> : (
            <ul className="space-y-2">
              {carrinho.map((it, idx) => (
                <li key={idx} className={`flex justify-between items-center p-2 rounded ${animate ? 'animate-pulse' : ''}`}>
                  <div>
                    <div className="font-semibold">{it.nome}</div>
                    <div className="text-sm text-gray-600">R$ {it.preco.toFixed(2)}</div>
                  </div>
                  <button onClick={() => remover(idx)} className="text-sm text-white bg-primary px-2 py-1 rounded">Remover</button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 border-t pt-3">
            <div className="flex justify-between items-center"><strong>Total:</strong><span className="font-semibold">R$ {total.toFixed(2)}</span></div>
            <button className="mt-3 w-full bg-primary text-white py-2 rounded-lg hover:opacity-90">Ir para checkout (simulado)</button>
          </div>
        </aside>
      </main>
    </div>
  )
}
