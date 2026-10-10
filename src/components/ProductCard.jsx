import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div>
      <Link to={`/produto/${product.id}`}>
        <div className="ph-frame">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
            <path d="M12 3c-3 3-5 6-5 9a5 5 0 0010 0c0-3-2-6-5-9z" />
          </svg>
        </div>
      </Link>
      <div style={{ marginTop: 14, textAlign: 'center' }}>
        <Link to={`/produto/${product.id}`} style={{ fontFamily: 'var(--serif)', fontSize: 19 }}>
          {product.name}
        </Link>
        <div className="price" style={{ marginTop: 4 }}>
          R$ {product.price.toFixed(2).replace('.', ',')}
        </div>
        <button
          className="btn"
          style={{ marginTop: 12, fontSize: 12, padding: '9px 20px' }}
          onClick={() => addItem(product)}
        >
          Adicionar
        </button>
      </div>
    </div>
  )
}
