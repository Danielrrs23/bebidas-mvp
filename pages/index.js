import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo à TADAHORA 🍹</h1>
      <Link href="/catalogo">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">
          Fazer Pedido
        </button>
      </Link>
    </div>
  );
}
