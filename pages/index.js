import {useState} from 'react'
import Header from '../components/Header'
import CategoryCard from '../components/CategoryCard'
export default function Home(){
  const [address,setAddress]=useState('')
  const [started,setStarted]=useState(false)
  return (
    <div className='min-h-screen bg-gradient-to-b from-boteco/40 to-white'>
      <Header />
      <main className='max-w-6xl mx-auto px-4 py-8'>
        <section className='bg-white rounded-xl p-8 shadow text-center'>
          <h1 className='text-3xl font-bold mb-2'>O seu boteco em casa</h1>
          <p className='text-gray-600 mb-4'>Insira seu endereço para começar</p>
          <div className='flex justify-center gap-3'>
            <input value={address} onChange={e=>setAddress(e.target.value)} placeholder='Rua, número, bairro' className='w-96 p-3 border rounded-lg' />
            <button onClick={()=>setStarted(true)} disabled={!address} className='bg-primary text-white px-4 py-2 rounded-lg disabled:opacity-50'>Continuar</button>
          </div>
        </section>

        <section className='mt-8'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-xl font-bold'>Categorias</h2>
            <a href='/catalogo' className='text-sm text-gray-600'>Ver catálogo →</a>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            <CategoryCard slug='Cervejas' icon='🍺' title='Cervejas' />
            <CategoryCard slug='Vinhos' icon='🍷' title='Vinhos' />
            <CategoryCard slug='Churrasco' icon='🥩' title='Churrasco' />
            <CategoryCard slug='Combos' icon='🍽️' title='Combos' />
          </div>
        </section>
      </main>
    </div>
  )
}
