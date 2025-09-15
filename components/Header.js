export default function Header({subtitle}){ return (
  <header className="py-4 bg-primary text-white">
    <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-black font-bold">C</div>
        <div>
          <div className="font-bold text-lg">CUMê Água</div>
          <div className="text-sm">{subtitle || 'O seu boteco em casa'}</div>
        </div>
      </div>
      <div className="text-sm">🍻 Verde Heineken Style</div>
    </div>
  </header>
)}