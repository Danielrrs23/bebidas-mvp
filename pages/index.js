import Link from 'next/link'
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-sunny/20">
      <header className="w-full bg-gradient-to-r from-primary to-accent text-white py-6 shadow-md">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">🍹 CUMê Água</h1>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-12 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Bem-vindo ao CUMê Água — Peça fácil, receba gelado!</h2>
        <div className="flex justify-center">
          <Link href="/catalogo"><a className="bg-sunny text-primary font-semibold px-6 py-3 rounded-lg shadow hover:bg-accent transition">Fazer Pedido</a></Link>
        </div>
      </main>
    </div>
  )
}
