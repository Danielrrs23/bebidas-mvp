import {useState} from 'react'
import {useRouter} from 'next/router'
import Header from '../components/Header'
export default function Home(){
  const [address,setAddress]=useState('')
  const router = useRouter()
  const go = ()=>{ if(address) router.push({pathname:'/catalogo', query:{address}}) }
  return (
    <div className='min-h-screen bg-gradient-to-b from-primary to-green-900 text-white'>
      <Header subtitle={'O seu boteco em casa'} />
      <main className='max-w-6xl mx-auto px-4 py-8'>
        <section className='bg-primary/90 rounded-xl p-8 shadow text-center'>
          <h1 className='text-3xl font-bold mb-2'>O seu boteco em casa</h1>
          <p className='mb-4'>Insira seu endereço para começar</p>
          <div className='flex justify-center gap-3'>
            <input value={address} onChange={e=>setAddress(e.target.value)} placeholder='Rua, número, bairro' className='w-96 p-3 rounded-lg text-black' />
            <button onClick={go} disabled={!address} className='bg-accent text-black px-4 py-2 rounded-lg disabled:opacity-50'>Continuar</button>
          </div>
        </section>
      </main>
    </div>
  )
}
