import { useState, useEffect } from 'react'
import Link from 'next/link'

const PRODUCTS = [
  { id: 'heineken-350', name: 'Heineken 350ml', price: 4.99, img: 'https://picsum.photos/seed/heineken/400/400', category: 'Cervejas' },
  { id: 'cocacola-350', name: 'Coca-Cola 350ml', price: 3.99, img: 'https://picsum.photos/seed/cocacola/400/400', category: 'Refrigerantes' },
  { id: 'pergola-750', name: 'Vinho Pérgola Tinto 750ml', price: 29.90, img: 'https://picsum.photos/seed/vinho/400/400', category: 'Vinhos' },
  { id: 'brahma-350', name: 'Brahma 350ml', price: 3.79, img: 'https://picsum.photos/seed/brahma/400/400', category: 'Cervejas' },
  { id: 'budweiser-350', name: 'Budweiser 350ml', price: 4.89, img: 'https://picsum.photos/seed/bud/400/400', category: 'Cervejas' },
  { id: 'carvao-5kg', name: 'Carvão São José 5kg', price: 24.90, img: 'https://picsum.photos/seed/carvao/400/400', category: 'Churrasco' },
]

export default function Catalogo(){
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('Todos')

  useEffect(()=>{ const raw = localStorage.getItem('cume_cart'); if(raw) setCart(JSON.parse(raw)) },[])
  useEffect(()=>{ localStorage.setItem('cume_cart', JSON.stringify(cart)) },[cart])

  function add(item){ setCart(prev=>[...prev, item]) }
  function remove(index){ setCart(prev=> prev.filter((_,i)=> i !== index)) }
  function total(){ return cart.reduce((s,i)=> s + i.price, 0).toFixed(2) }

  const cats = ['Todos','Cervejas','Vinhos','Churrasco','Refrigerantes']
  const shown = PRODUCTS.filter(p => category === 'Todos' ? true : p.category === category)

  return (
    <div className="page">
      <header className="top">
        <div className="brand">🍻 <strong>CUMê Água</strong></div>
        <nav className="mini-nav">
          <a href="/">Início</a>
          <Link href="/checkout">Finalizar</Link>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <h1>O seu boteco em casa</h1>
          <p>Insira endereço no checkout para finalizar.</p>
        </section>

        <section className="cats">
          <h3>Categorias</h3>
          <div className="cat-list">
            {cats.map(c => (
              <button key={c} className={c === category ? 'active' : ''} onClick={()=>setCategory(c)}>{c}</button>
            ))}
          </div>
        </section>

        <section className="grid">
          {shown.map(p => (
            <article className="card" key={p.id}>
              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <div className="price">R$ {p.price.toFixed(2)}</div>
              <button className="btn" onClick={()=>add(p)}>Adicionar</button>
            </article>
          ))}
        </section>

        <aside className="cart">
          <h3>Seu Carrinho</h3>
          {cart.length === 0 ? <p>Nenhum item</p> : (
            <ul>
              {cart.map((it,idx)=> (
                <li key={idx}>{it.name} - R$ {it.price.toFixed(2)} <button onClick={()=>remove(idx)}>Remover</button></li>
              ))}
            </ul>
          )}
          <div className="total">Total: R$ {total()}</div>
          <Link href="/checkout" className="checkout">Finalizar Pedido</Link>
        </aside>
      </main>
      <footer className="foot">App de demonstração — pagamento na entrega disponível (simulado)</footer>
    </div>
  )
}
