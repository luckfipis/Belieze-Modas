import { Link } from 'react-router-dom'
import { promo } from '../data/promo'

export default function PromoBanner() {
  return (
    <Link
      to={promo.linkTo}
      style={{
        display: 'block',
        background: 'linear-gradient(120deg, var(--cream-deep), var(--cream))',
        border: '1px solid var(--line)',
      }}
    >
      <div
        className="page"
        style={{
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 12, letterSpacing: '0.15em', color: 'var(--gold-dark)' }}>{promo.tag}</p>
        <h2 style={{ fontSize: 32, margin: '10px 0 8px' }}>{promo.title}</h2>
        <p style={{ color: 'var(--ink-soft)', marginBottom: 20 }}>{promo.subtitle}</p>
        <span className="btn btn-gold">{promo.buttonLabel}</span>
      </div>
    </Link>
  )
}
