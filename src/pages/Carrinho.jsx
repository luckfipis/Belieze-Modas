import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Carrinho() {
  const { items, updateQty, removeItem, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="page section" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 28 }}>Sua sacola está vazia</h1>
        <Link to="/catalogo/todos" className="btn btn-gold" style={{ marginTop: 20, display: 'inline-block' }}>
          Ver coleção
        </Link>
      </div>
    )
  }

  return (
    <div className="page section" style={{ maxWidth: 640 }}>
      <h1 style={{ fontSize: 28, marginBottom: 30 }}>Sua sacola</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {items.map((item) => (
          <div key={item.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 19 }}>{item.name}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 6 }}>
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    style={{ border: '1px solid var(--line)', background: 'none', width: 26 }}
                  >
                    −
                  </button>{' '}
                  {item.qty}{' '}
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    style={{ border: '1px solid var(--line)', background: 'none', width: 26 }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{ background: 'none', border: 'none', marginLeft: 12, color: 'var(--ink-soft)' }}
                  >
                    remover
                  </button>
                </div>
              </div>
              <div className="price">R$ {(item.price * item.qty).toFixed(2).replace('.', ',')}</div>
            </div>
            <hr className="divider" style={{ marginTop: 20 }} />
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '24px 0 30px', fontSize: 18 }}>
        <span>Total</span>
        <span className="price">R$ {total.toFixed(2).replace('.', ',')}</span>
      </div>

      {/*
        Pagamento: integração com Mercado Pago entra aqui assim que a conta
        estiver criada. Por enquanto o botão só sinaliza o próximo passo.
      */}
      <button className="btn btn-gold" style={{ width: '100%' }} disabled>
        Pagamento em breve
      </button>
      <p style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 10, textAlign: 'center' }}>
        O checkout com PIX e cartão será ativado assim que a conta de pagamento estiver pronta.
      </p>
    </div>
  )
}
