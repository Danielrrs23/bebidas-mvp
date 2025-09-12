import Link from 'next/link'
export default function CategoryCard({slug,icon,title}){
  return (
    <Link href={`/catalogo?cat=${encodeURIComponent(slug)}`}><a className="block bg-white p-4 rounded-xl shadow hover:scale-102 transition transform">
      <div className="text-2xl">{icon}</div>
      <div className="mt-2 font-semibold text-center">{title}</div>
    </a></Link>
  )
}