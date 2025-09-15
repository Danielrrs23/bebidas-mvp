import {useEffect,useState} from 'react'
import ProductCard from '../components/ProductCard'
import FloatingCart from '../components/FloatingCart'
import {useRouter} from 'next/router'

const allProducts = [
  {
    "id": 1,
    "nome": "Heineken 350ml",
    "preco": 4.99,
    "img": "https://upload.wikimedia.org/wikipedia/commons/7/74/Heineken_logo.svg",
    "cat": "Cervejas"
  },
  {
    "id": 2,
    "nome": "Skol 350ml",
    "preco": 3.59,
    "img": "https://upload.wikimedia.org/wikipedia/commons/0/06/Skol_logo.png",
    "cat": "Cervejas"
  },
  {
    "id": 3,
    "nome": "Brahma 350ml",
    "preco": 3.79,
    "img": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Brahma_logo.png",
    "cat": "Cervejas"
  },
  {
    "id": 4,
    "nome": "Budweiser 350ml",
    "preco": 4.89,
    "img": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Budweiser_logo.png",
    "cat": "Cervejas"
  },
  {
    "id": 5,
    "nome": "Stella Artois 275ml",
    "preco": 5.29,
    "img": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Stella_Artois_logo.png",
    "cat": "Cervejas"
  },
  {
    "id": 6,
    "nome": "Corona 330ml",
    "preco": 6.49,
    "img": "https://upload.wikimedia.org/wikipedia/commons/0/09/Corona_logo.png",
    "cat": "Cervejas"
  },
  {
    "id": 7,
    "nome": "Bohemia 350ml",
    "preco": 3.99,
    "img": "https://upload.wikimedia.org/wikipedia/commons/0/06/Bohemia_logo.png",
    "cat": "Cervejas"
  },
  {
    "id": 8,
    "nome": "Eisenbahn Pilsen 350ml",
    "preco": 4.49,
    "img": "https://upload.wikimedia.org/wikipedia/commons/2/27/Eisenbahn_logo.png",
    "cat": "Cervejas"
  },
  {
    "id": 9,
    "nome": "Baden Baden Witbier 350ml",
    "preco": 7.9,
    "img": "https://upload.wikimedia.org/wikipedia/commons/1/13/Baden-Baden_logo.png",
    "cat": "Cervejas"
  },
  {
    "id": 10,
    "nome": "Original 350ml",
    "preco": 4.19,
    "img": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Original_logo.png",
    "cat": "Cervejas"
  },
  {
    "id": 11,
    "nome": "Coca-Cola 350ml",
    "preco": 3.99,
    "img": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Coca-Cola_logo.svg",
    "cat": "Refrigerantes"
  },
  {
    "id": 12,
    "nome": "Casillero del Diablo Cabernet Sauvignon 750ml",
    "preco": 65.0,
    "img": "https://upload.wikimedia.org/wikipedia/commons/7/78/Casillero_del_Diablo_logo.png",
    "cat": "Vinhos"
  },
  {
    "id": 13,
    "nome": "Miolo Reserva Chardonnay 750ml",
    "preco": 55.0,
    "img": "https://upload.wikimedia.org/wikipedia/commons/8/86/Miolo_logo.png",
    "cat": "Vinhos"
  },
  {
    "id": 14,
    "nome": "Salton Intenso Merlot 750ml",
    "preco": 42.0,
    "img": "https://upload.wikimedia.org/wikipedia/commons/1/13/Salton_logo.png",
    "cat": "Vinhos"
  },
  {
    "id": 15,
    "nome": "Aurora Varietal Moscato 750ml",
    "preco": 35.0,
    "img": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Aurora_logo.png",
    "cat": "Vinhos"
  },
  {
    "id": 16,
    "nome": "Picanha fatiada (1kg)",
    "preco": 89.0,
    "img": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Meat_icon.png",
    "cat": "Churrasco"
  },
  {
    "id": 17,
    "nome": "Linguiça toscana (1kg)",
    "preco": 29.0,
    "img": "https://upload.wikimedia.org/wikipedia/commons/1/10/Sausage_icon.png",
    "cat": "Churrasco"
  },
  {
    "id": 18,
    "nome": "Queijo coalho palitos (500g)",
    "preco": 24.0,
    "img": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cheese_icon.png",
    "cat": "Churrasco"
  },
  {
    "id": 19,
    "nome": "Carvão 5kg",
    "preco": 25.0,
    "img": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Coal_icon.png",
    "cat": "Churrasco"
  }
];


export default function Catalogo(){
  const router=useRouter()
  const {cat} = router.query
  const [produtos,setProdutos]=useState(allProducts)
  const [carrinho,setCarrinho]=useState([])
  useEffect(()=>{ try{ const raw=localStorage.getItem('carrinho_v6'); if(raw) setCarrinho(JSON.parse(raw)) }catch(e){} },[])
  useEffect(()=> localStorage.setItem('carrinho_v6', JSON.stringify(carrinho)),[carrinho])
  useEffect(()=>{ if(cat){ const decoded = Array.isArray(cat)?cat[0]:cat; setProdutos(allProducts.filter(p=>p.cat===decoded)) } else setProdutos(allProducts) },[cat])
  const add=(p)=> setCarrinho(c=>[...c,p])
  const remove=(i)=> setCarrinho(c=>{ const a=[...c]; a.splice(i,1); return a })
  const total = carrinho.reduce((s,it)=>s+it.preco,0)
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm sticky top-0 z-20'>
        <div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
          <h1 className='text-xl font-bold'>🍹 CUMê Água</h1>
          <a href='/' className='text-sm text-gray-600'>Início</a>
        </div>
      </header>

      <main className='max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <section className='md:col-span-2'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-2xl font-bold'>{cat?`Categoria: ${cat}`:'Todos os produtos'}</h2>
            <div className='space-x-2'>
              <a href='/catalogo' className='text-sm text-gray-600'>Todos</a>
              <a href='/catalogo?cat=Cervejas' className='text-sm text-gray-600'>Cervejas</a>
              <a href='/catalogo?cat=Vinhos' className='text-sm text-gray-600'>Vinhos</a>
              <a href='/catalogo?cat=Churrasco' className='text-sm text-gray-600'>Churrasco</a>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {produtos.map(p=> <ProductCard key={p.id} p={p} onAdd={add} />)}
          </div>
        </section>

        <aside className='bg-white p-4 rounded-xl shadow sticky top-6'>
          <h3 className='font-bold text-lg'>🛒 Seu Carrinho</h3>
          {carrinho.length===0 ? <p className='text-gray-500'>Nenhum item</p> : (
            <ul className='space-y-2 mt-3'>
              {carrinho.map((it,idx)=>(
                <li key={idx} className='flex justify-between items-center'>
                  <div>
                    <div className='font-semibold'>{it.nome}</div>
                    <div className='text-sm text-gray-600'>R$ {it.preco.toFixed(2)}</div>
                  </div>
                  <button onClick={()=>remove(idx)} className='text-sm bg-primary text-white px-2 py-1 rounded'>Remover</button>
                </li>
              ))}
            </ul>
          )}
          <div className='mt-4 border-t pt-3'>
            <div className='flex justify-between items-center'><strong>Total:</strong><span className='font-semibold'>R$ {total.toFixed(2)}</span></div>
            <a href='/checkout' className='mt-3 block text-center bg-primary text-white py-2 rounded-lg'>Finalizar Pedido</a>
          </div>
        </aside>
      </main>

      <FloatingCart count={carrinho.length} total={total} />
    </div>
  )
}
