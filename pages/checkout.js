import {useEffect,useState} from 'react'
export default function Checkout(){
  const [carrinho,setCarrinho]=useState([])
  const [nome,setNome]=useState('')
  const [end,setEnd]=useState('')
  const [pag,setPag]=useState('delivery')
  const [done,setDone]=useState(false)
  useEffect(()=>{ try{ const raw=localStorage.getItem('carrinho_v6'); if(raw) setCarrinho(JSON.parse(raw)) }catch(e){} },[])
  const total = carrinho.reduce((s,it)=>s+it.preco,0)
  const confirmar=(e)=>{ e.preventDefault(); setDone(true); localStorage.removeItem('carrinho_v6') }
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm'><div className='max-w-6xl mx-auto px-4 py-3'><h1 className='text-xl font-bold'>Finalizar Pedido</h1></div></header>
      <main className='max-w-3xl mx-auto px-4 py-8'>
        {done ? (
          <div className='bg-white p-6 rounded-xl shadow text-center'>
            <h2 className='text-2xl font-bold mb-2'>🍻 Pedido recebido!</h2>
            <p className='mb-3'>Seu pedido foi recebido. Estimativa de entrega: <strong>30–40 minutos</strong>.</p>
            <p>Pagamento: {pag==='delivery'?'Pagar na entrega':'Pagamento online (simulado)'}</p>
          </div>
        ) : (
          <form onSubmit={confirmar} className='bg-white p-6 rounded-xl shadow'>
            <h3 className='font-semibold mb-2'>Resumo do pedido</h3>
            <ul className='mb-4 space-y-2'>{carrinho.map((it,idx)=>(<li key={idx} className='flex justify-between'><span>{it.nome}</span><span>R$ {it.preco.toFixed(2)}</span></li>))}</ul>
            <div className='mb-4'><strong>Total: R$ {total.toFixed(2)}</strong></div>
            <label className='block mb-2 font-semibold'>Nome</label><input required value={nome} onChange={e=>setNome(e.target.value)} className='w-full p-3 border rounded mb-3'/>
            <label className='block mb-2 font-semibold'>Endereço</label><input required value={end} onChange={e=>setEnd(e.target.value)} className='w-full p-3 border rounded mb-3'/>
            <label className='block mb-2 font-semibold'>Pagamento</label>
            <div className='mb-4 space-x-4'>
              <label><input type='radio' name='pag' checked={pag==='delivery'} onChange={()=>setPag('delivery')}/> Pagar na entrega</label>
              <label className='ml-4'><input type='radio' name='pag' checked={pag==='pix'} onChange={()=>setPag('pix')}/> Pix (simulado)</label>
            </div>
            <button className='w-full bg-primary text-white py-3 rounded-lg'>Confirmar Pedido (simulado)</button>
          </form>
        )}
      </main>
    </div>
  )
}
