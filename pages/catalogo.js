import { useState } from 'react'

const produtos = [
  { id: 1, nome: "Heineken 350ml", preco: 4.99, imagem: "https://cdn.shopify.com/s/files/1/0564/9373/4141/products/HEINEKEN-LATA-350ML.jpg" },
  { id: 2, nome: "Skol 350ml", preco: 3.59, imagem: "https://m.media-amazon.com/images/I/51V7YqP1nML._AC_UF894,1000_QL80_.jpg" },
  { id: 3, nome: "Brahma 350ml", preco: 3.79, imagem: "https://m.media-amazon.com/images/I/61DGe0XEtjL._AC_UF894,1000_QL80_.jpg" },
  { id: 4, nome: "Budweiser 350ml", preco: 4.89, imagem: "https://m.media-amazon.com/images/I/61yN9JtZ2ML._AC_UF894,1000_QL80_.jpg" }
]

export default function Catalogo() {
  const [carrinho, setCarrinho] = useState([])

  const adicionar = (produto) => {
    setCarrinho([...carrinho, produto])
  }

  const remover = (index) => {
    const novoCarrinho = [...carrinho]
    novoCarrinho.splice(index, 1)
    setCarrinho(novoCarrinho)
  }

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 3, padding: '1rem' }}>
        <h2>Catálogo</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {produtos.map((p) => (
            <div key={p.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
              <img src={p.imagem} alt={p.nome} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
              <h3>{p.nome}</h3>
              <p>R$ {p.preco.toFixed(2)}</p>
              <button onClick={() => adicionar(p)} style={{ background: '#017C55', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px' }}>Adicionar</button>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, padding: '1rem', borderLeft: '1px solid #ddd' }}>
        <h2>🛒 Seu Carrinho</h2>
        {carrinho.length === 0 ? <p>Nenhum item</p> : (
          <ul>
            {carrinho.map((item, index) => (
              <li key={index}>{item.nome} - R$ {item.preco.toFixed(2)} <button onClick={() => remover(index)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>Remover</button></li>
            ))}
          </ul>
        )}
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <button style={{ background: '#017C55', color: 'white', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '8px' }}>Finalizar Pedido</button>
      </div>
    </div>
  )
}
