import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function Produto() {
  const { id } = useParams()
  const product = products.find((p) => String(p.id) === id)
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="page section" style={{ textAlign: 'center' }}>
        <p>Produto não encontrado.</p>
        <Link to="/catalogo/todos" className="btn" style={{ marginTop: 16, display: 'inline-block' }}>
          Voltar ao catálogo
        </Link>
      </div>
    )
  }

  return (
    <div
      className="page section product-detail"
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}
    >
      <div className="ph-frame">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
          <path d="M12 3c-3 3-5 6-5 9a5 5 0 0010 0c0-3-2-6-5-9z" />
        </svg>
      </div>

      <div>
        <p style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{product.category}</p>
        <h1 style={{ fontSize: 34, margin: '8px 0 16px' }}>{product.name}</h1>
        <div className="price" style={{ fontSize: 24, marginBottom: 20 }}>
          R$ {product.price.toFixed(2).replace('.', ',')}
        </div>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 420 }}>{product.description}</p>

        <button className="btn btn-gold" style={{ marginTop: 28 }} onClick={() => addItem(product)}>
          Adicionar à sacola
        </button>
      </div>
    </div>
  )
}
