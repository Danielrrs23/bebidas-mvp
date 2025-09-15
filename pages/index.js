import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <header>
        <h1>🍻 CUMê Água</h1>
        <p>O seu boteco em casa</p>
      </header>
      <main style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Bem-vindo!</h2>
        <p>Clique abaixo para acessar o catálogo</p>
        <Link href="/catalogo">
          <button style={{ backgroundColor: '#017C55', color: 'white', padding: '1rem 2rem', border: 'none', borderRadius: '8px', marginTop: '1rem' }}>Ir para o Catálogo</button>
        </Link>
      </main>
    </div>
  )
}
