import {useEffect,useState} from 'react'
import ProductCard from '../components/ProductCard'
import FloatingCart from '../components/FloatingCart'
import {useRouter} from 'next/router'

const allProducts = [
  // beers (sample dataset)
  {id:1,nome:'Heineken 350ml',preco:4.99,img:'/images/heineken-350.png',cat:'Cervejas'},
  {id:2,nome:'Skol 350ml',preco:3.99,img:'/images/heineken-350.png',cat:'Cervejas'},
  {id:3,nome:'Brahma 350ml',preco:3.79,img:'/images/heineken-350.png',cat:'Cervejas'},
  {id:4,nome:'Antarctica 350ml',preco:3.89,img:'/images/heineken-350.png',cat:'Cervejas'},
  {id:5,nome:'Budweiser 350ml',preco:5.49,img:'/images/heineken-350.png',cat:'Cervejas'},
  {id:6,nome:'Corona 355ml',preco:6.90,img:'/images/heineken-350.png',cat:'Cervejas'},
  {id:7,nome:'Stella Artois 350ml',preco:5.99,img:'/images/heineken-350.png',cat:'Cervejas'},
  {id:8,nome:'Bohemia 350ml',preco:4.49,img:'/images/heineken-350.png',cat:'Cervejas'},
  {id:9,nome:'Eisenbahn 330ml',preco:6.50,img:'/images/heineken-350.png',cat:'Cervejas'},
  {id:10,nome:'Original 350ml',preco:4.19,img:'/images/heineken-350.png',cat:'Cervejas'},
  // softs and wine and combos
  {id:11,nome:'Coca-Cola 350ml',preco:3.99,img:'/images/coca-350.png',cat:'Refrigerantes'},
  {id:12,nome:'Vinho Pérgola Tinto Suave 750ml',preco:29.90,img:'/images/pergola-vinho.png',cat:'Vinhos'},
  {id:13,nome:'Vinho Branco Seco 750ml',preco:34.90,img:'/images/pergola-vinho.png',cat:'Vinhos'},
  {id:14,nome:'Vinho Rosé 750ml',preco:39.90,img:'/images/pergola-vinho.png',cat:'Vinhos'},
  {id:15,nome:'Combo Churrasco Simples (4 pessoas)',preco:129.00,img:'/images/layout-sample.jpg',cat:'Combos'}
]

export default function Catalogo(){
  const router = useRouter()
  const { cat } = router.query
  const [produtos,setProdutos] = useState(allProducts)
  const [carrinho,setCarrinho] = useState([])
  useEffect(()=>{
    try{ const raw = localStorage.getItem('carrinho_v4'); if(raw) setCarrinho(JSON.parse(raw)) }catch(e){}
  },[])
  useEffect(()=> localStorage.setItem('carrinho_v4', JSON.stringify(carrinho)),[carrinho])

  useEffect(()=>{
    if(cat){
      const decoded = Array.isArray(cat) ? cat[0] : cat
      setProdutos(allProducts.filter(p=>p.cat===decoded))
    } else setProdutos(allProducts)
  },[cat])

  const add = (p)=> setCarrinho(c=>[...c,p])
  const remove = (i)=> setCarrinho(c=>{ const a=[...c]; a.splice(i,1); return a })
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
            <h2 className='text-2xl font-bold'>{cat ? `Categoria: ${cat}` : 'Todos os produtos'}</h2>
            <a href='/catalogo' className='text-sm text-gray-600'>Ver todos</a>
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
                  <div><div className='font-semibold'>{it.nome}</div><div className='text-sm text-gray-600'>R$ {it.preco.toFixed(2)}</div></div>
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
