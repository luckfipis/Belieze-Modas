import { Link } from 'react-router-dom'
import { categories } from '../data/products'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { count, setIsOpen } = useCart()

  return (
    <header style={{ borderBottom: '1px solid var(--line)', background: 'var(--cream)' }}>
      <div
        className="page"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '22px 24px 0',
        }}
      >
        <Link to="/" style={{ fontFamily: 'var(--serif)', fontSize: 30, letterSpacing: '0.08em' }}>
          BELIEZE
        </Link>

        <nav
          style={{
            display: 'flex',
            gap: 28,
            margin: '18px 0 20px',
            fontSize: 14,
            letterSpacing: '0.03em',
          }}
        >
          {categories.map((c) => (
            <Link key={c} to={`/catalogo/${encodeURIComponent(c)}`}>
              {c}
            </Link>
          ))}
        </nav>

        <div style={{ position: 'absolute', right: 24, top: 26, display: 'flex', gap: 18 }}>
          <button
            onClick={() => setIsOpen(true)}
            style={{ background: 'none', border: 'none', fontSize: 14, color: 'var(--ink)' }}
          >
            Sacola ({count})
          </button>
        </div>
      </div>
    </header>
  )
}
