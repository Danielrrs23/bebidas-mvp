export default function ProductCard({p, onAdd}){
  return (
    <article className="bg-white p-4 rounded-xl shadow flex flex-col items-center hover:shadow-lg transition">
      <img src={p.img} alt={p.nome} className="w-40 h-40 object-contain mb-3" />
      <h3 className="font-semibold text-center">{p.nome}</h3>
      <p className="text-gray-600">R$ {p.preco.toFixed(2)}</p>
      <button onClick={()=>onAdd(p)} className="mt-3 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent hover:text-black">Adicionar</button>
    </article>
  )
}