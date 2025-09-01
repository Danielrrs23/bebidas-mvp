import { useState } from "react";

const produtos = [
  { id: 1, nome: "Cerveja Pilsen", preco: 6.90, imagem: "/cerveja.png" },
  { id: 2, nome: "Vinho Tinto", preco: 39.90, imagem: "/vinho.png" },
  { id: 3, nome: "Refrigerante Cola", preco: 7.50, imagem: "/refri.png" },
];

export default function Catalogo() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Bebidas 🍻</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {produtos.map((p) => (
          <div key={p.id} className="border p-4 rounded-lg shadow">
            <img src={p.imagem} alt={p.nome} className="w-full h-32 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{p.nome}</h2>
            <p className="mb-2">R$ {p.preco.toFixed(2)}</p>
            <button
              onClick={() => adicionarCarrinho(p)}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 border rounded-lg">
        <h2 className="text-xl font-bold mb-2">🛒 Seu Carrinho</h2>
        {carrinho.length === 0 ? (
          <p>Nenhum produto adicionado.</p>
        ) : (
          <>
            <ul>
              {carrinho.map((item, i) => (
                <li key={i} className="flex justify-between items-center mb-1">
                  {item.nome} - R$ {item.preco.toFixed(2)}
                  <button
                    onClick={() => removerCarrinho(i)}
                    className="text-red-500"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-bold">Total: R$ {total.toFixed(2)}</p>
          </>
        )}
      </div>
    </div>
  );
}
