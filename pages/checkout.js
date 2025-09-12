import { useState } from 'react'
export default function Checkout(){
  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [done,setDone]=useState(false)
  const submit = (e)=>{ e.preventDefault(); setDone(true) }
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3"><h1 className="text-xl font-bold">Finalizar Compra</h1></div>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-8">
        {done ? (
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold mb-2">Pedido realizado!</h2>
            <p>Obrigado, em breve vamos processar seu pedido (checkout simulado).</p>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow">
            <label className="block mb-2 font-semibold">Nome</label>
            <input required value={name} onChange={e=>setName(e.target.value)} className="w-full p-3 border rounded mb-4" />
            <label className="block mb-2 font-semibold">Endereço</label>
            <input required value={address} onChange={e=>setAddress(e.target.value)} className="w-full p-3 border rounded mb-4" />
            <button className="w-full bg-primary text-white py-3 rounded-lg">Confirmar Pedido (simulado)</button>
          </form>
        )}
      </main>
    </div>
  )
}
