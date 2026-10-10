import { Link } from 'react-router-dom'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import PromoBanner from '../components/PromoBanner'
import Reveal from '../components/Reveal'

export default function Home() {
  const destaques = products.slice(0, 4)

  return (
    <div>
      <section className="section" style={{ textAlign: 'center', paddingBottom: 40 }}>
        <div className="page">
          <p style={{ letterSpacing: '0.15em', fontSize: 12, color: 'var(--ink-soft)' }}>NOVA COLEÇÃO</p>
          <h1 style={{ fontSize: 46, margin: '10px 0 18px' }}>Peças que ficam com você</h1>
          <p style={{ maxWidth: 480, margin: '0 auto 26px', color: 'var(--ink-soft)' }}>
            Roupa feminina pensada para o dia a dia e para os momentos que merecem um brilho a mais.
          </p>
          <Link to="/catalogo/todos" className="btn btn-gold">
            Ver coleção
          </Link>
        </div>
      </section>

      <Reveal>
        <PromoBanner />
      </Reveal>

      <Reveal>
        <section className="section" style={{ background: 'var(--cream-deep)' }}>
          <div className="page" style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {categories.map((c) => (
              <Link key={c} to={`/catalogo/${encodeURIComponent(c)}`} style={{ textAlign: 'center' }}>
                <div className="ph-frame" style={{ width: 120, aspectRatio: '1 / 1' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
                    <path d="M12 3c-3 3-5 6-5 9a5 5 0 0010 0c0-3-2-6-5-9z" />
                  </svg>
                </div>
                <div style={{ marginTop: 10, fontFamily: 'var(--serif)', fontSize: 18 }}>{c}</div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="page">
            <h2 style={{ textAlign: 'center', fontSize: 30 }} className="eyebrow-leaf">
              Mais procurados
            </h2>
            <div
              style={{
                marginTop: 40,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 32,
              }}
            >
              {destaques.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.08}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
