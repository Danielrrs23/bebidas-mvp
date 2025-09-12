import { useState } from 'react'
import Link from 'next/link'
export default function Home(){
  const [address, setAddress] = useState('')
  const [started, setStarted] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <header className="py-6">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">C</div>
            <div>
              <h1 className="text-xl font-bold">CUMê Água</h1>
              <p className="text-sm text-gray-600">O seu boteco em casa</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">🍻 Minimalista • Rápido</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="bg-white rounded-xl p-6 shadow text-center">
          <h2 className="text-2xl font-bold mb-2">O seu boteco em casa</h2>
          <p className="text-gray-600 mb-4">Insira seu endereço para começar a pedir</p>
          <div className="flex gap-2 justify-center">
            <input value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Rua, número, bairro" className="w-80 p-3 border rounded-lg" />
            <button onClick={()=>setStarted(true)} disabled={!address} className="bg-primary text-white px-4 py-2 rounded-lg disabled:opacity-50">Continuar</button>
          </div>
        </section>

        {started && (
          <section className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Categorias</h3>
              <Link href="/catalogo"><a className="text-sm text-gray-600">Ver catálogo →</a></Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow text-center">🍺<div className="mt-2 font-semibold">Cervejas</div></div>
              <div className="bg-white p-4 rounded-xl shadow text-center">🍷<div className="mt-2 font-semibold">Vinhos</div></div>
              <div className="bg-white p-4 rounded-xl shadow text-center">🥩<div className="mt-2 font-semibold">Churrasco</div></div>
              <div className="bg-white p-4 rounded-xl shadow text-center">🍽️<div className="mt-2 font-semibold">Combos</div></div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
