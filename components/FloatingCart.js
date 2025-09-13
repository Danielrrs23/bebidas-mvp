import Link from 'next/link'
export default function FloatingCart({count,total}){
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <Link href="/checkout">
        <a className="bg-primary text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-4 hover:bg-accent hover:text-black transition">
          <div className="text-lg">🛒</div>
          <div className="font-semibold">{count} itens</div>
          <div className="text-sm">R$ {total.toFixed(2)}</div>
        </a>
      </Link>
    </div>
  )
}