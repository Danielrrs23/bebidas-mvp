import { useEffect, useState } from 'react'
import Link from 'next/link'

const initial = [
  { id:1, nome:'Heineken 350ml', preco:4.99, img:'/images/heineken-350.png', cat:'Cervejas' },
  { id:2, nome:'Coca-Cola 350ml', preco:3.99, img:'/images/coca-350.png', cat:'Refrigerantes' },
  { id:3, nome:'Vinho Pérgola Tinto Suave', preco:29.90, img:'/images/pergola-vinho.png', cat:'Vinhos' },
  { id:4, nome:'Vinho Rosé Secreto 750ml', preco:49.90, img:'/images/pergola-vinho.png', cat:'Vinhos' },
  { id:5, nome:'Churrasqueiro + Kit Carnes', preco:199.00, img:'/images/layout-sample.jpg', cat:'Churrasco' },
]

export default function Catalogo(){
  const [produtos] = useState(initial)
  const [carrinho, setCarrinho] = useState([])

  useEffect(()=>{
    // carregar carrinho do localStorage
    try{
      const raw = localStorage.getItem('carrinho_v3')
      if(raw) setCarrinho(JSON.parse(raw))
    }catch(e){}
  },[])

  useEffect(()=>{
    // persistir no localStorage
    localStorage.setItem('carrinho_v3', JSON.stringify(carrinho))
  },[carrinho])

  const add = (p)=> setCarrinho(c=>[...c,p])
  const remove = (i)=> setCarrinho(c=>{ const n=[...c]; n.splice(i,1); return n })
  const total = carrinho.reduce((s,it)=>s+it.preco,0)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">🍹 CUMê Água</h1>
          <Link href="/"><a className="text-sm text-gray-600">Início</a></Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Catálogo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {produtos.map(p=> (
              <article key={p.id} className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
                <img src={p.img} alt={p.nome} className="w-40 h-40 object-contain mb-3" />
                <h3 className="font-semibold text-center">{p.nome}</h3>
                <p className="text-gray-600">R$ {p.preco.toFixed(2)}</p>
                <button onClick={()=>add(p)} className="mt-3 bg-primary text-white px-4 py-2 rounded-lg">Pedir</button>
              </article>
            ))}
          </div>
        </section>

        <aside className="bg-white p-4 rounded-xl shadow sticky top-6">
          <h3 className="font-bold text-lg">🛒 Seu Carrinho</h3>
          {carrinho.length===0 ? <p className="text-gray-500">Nenhum item</p> : (
            <ul className="space-y-2 mt-3">
              {carrinho.map((it,idx)=>(
                <li key={idx} className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{it.nome}</div>
                    <div className="text-sm text-gray-600">R$ {it.preco.toFixed(2)}</div>
                  </div>
                  <button onClick={()=>remove(idx)} className="text-sm bg-primary text-white px-2 py-1 rounded">Remover</button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 border-t pt-3">
            <div className="flex justify-between items-center"><strong>Total:</strong><span className="font-semibold">R$ {total.toFixed(2)}</span></div>
            <Link href="/checkout"><a className="mt-3 block text-center bg-primary text-white py-2 rounded-lg">Finalizar Pedido</a></Link>
          </div>
        </aside>
      </main>
    </div>
  )
}
