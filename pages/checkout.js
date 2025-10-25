import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Checkout(){
  const router = useRouter()
  const raw = typeof window !== 'undefined' ? localStorage.getItem('cume_cart') : null
  const cart = raw ? JSON.parse(raw) : []
  const [address, setAddress] = useState('')
  const [payOnDelivery, setPayOnDelivery] = useState(true)
  const total = cart.reduce((s,i)=> s + i.price, 0).toFixed(2)

  function place(){
    const order = { cart, address, payOnDelivery, total, created: new Date().toISOString() }
    localStorage.setItem('cume_last_order', JSON.stringify(order))
    localStorage.removeItem('cume_cart')
    alert('Pedido simulado criado — ' + (payOnDelivery ? 'Pagamento na entrega' : 'Sem integração de pagamento no momento'))
    router.push('/catalogo')
  }
  return (
    <div className="checkout-page">
      <h1>Finalizar Pedido</h1>
      <div className="box">
        <label>Endereço de entrega</label>
        <input value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Rua, número, bairro" />
      </div>
      <div className="box">
        <label>Opções de pagamento</label>
        <div><label><input type="radio" checked={payOnDelivery} onChange={()=>setPayOnDelivery(true)} /> Pagar na entrega</label></div>
        <div><label><input type="radio" checked={!payOnDelivery} onChange={()=>setPayOnDelivery(false)} /> (Simulado) Cartão — não funcional</label></div>
      </div>
      <div className="summary">
        <h3>Resumo</h3>
        <p>Total: R$ {total}</p>
        <button className="place" onClick={place} disabled={!address}>Confirmar pedido</button>
      </div>
    </div>
  )
}
