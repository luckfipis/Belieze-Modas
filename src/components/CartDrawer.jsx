import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQty, removeItem, total } = useCart()

  if (!isOpen) return null

  return (
    <div
      onClick={() => setIsOpen(false)}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(58,46,34,0.35)',
        zIndex: 40,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 360,
          maxWidth: '90vw',
          height: '100%',
          background: 'var(--cream)',
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>Sua sacola</h3>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', fontSize: 20 }}>
            ×
          </button>
        </div>

        <hr className="divider" style={{ margin: '16px 0' }} />

        {items.length === 0 && <p style={{ color: 'var(--ink-soft)' }}>Sua sacola está vazia.</p>}

        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {items.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 17 }}>{item.name}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 4 }}>
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    style={{ border: '1px solid var(--line)', background: 'none', width: 24 }}
                  >
                    −
                  </button>{' '}
                  {item.qty}{' '}
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    style={{ border: '1px solid var(--line)', background: 'none', width: 24 }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{ background: 'none', border: 'none', marginLeft: 10, color: 'var(--ink-soft)' }}
                  >
                    remover
                  </button>
                </div>
              </div>
              <div className="price">R$ {(item.price * item.qty).toFixed(2).replace('.', ',')}</div>
            </div>
          ))}
        </div>

        <hr className="divider" style={{ margin: '16px 0' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
          <span>Total</span>
          <span className="price">R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>

        <Link to="/carrinho" onClick={() => setIsOpen(false)} className="btn btn-gold" style={{ textAlign: 'center' }}>
          Finalizar compra
        </Link>
      </div>
    </div>
  )
}
