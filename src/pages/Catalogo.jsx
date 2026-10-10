import { Link, useParams } from 'react-router-dom'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Catalogo() {
  const { categoria } = useParams()
  const ativa = categoria && categoria !== 'todos' ? decodeURIComponent(categoria) : null
  const lista = ativa ? products.filter((p) => p.category === ativa) : products

  return (
    <div className="page section">
      <h1 style={{ fontSize: 32, textAlign: 'center' }}>{ativa || 'Todas as peças'}</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, margin: '28px 0 44px', fontSize: 14 }}>
        <Link to="/catalogo/todos" style={{ color: !ativa ? 'var(--gold-dark)' : 'var(--ink)' }}>
          Todos
        </Link>
        {categories.map((c) => (
          <Link
            key={c}
            to={`/catalogo/${encodeURIComponent(c)}`}
            style={{ color: ativa === c ? 'var(--gold-dark)' : 'var(--ink)' }}
          >
            {c}
          </Link>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 32,
        }}
      >
        {lista.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
