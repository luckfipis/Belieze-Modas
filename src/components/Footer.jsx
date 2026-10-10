export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', marginTop: 60 }}>
      <div
        className="page"
        style={{
          padding: '34px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          fontSize: 13,
          color: 'var(--ink-soft)',
        }}
      >
        <span>© {new Date().getFullYear()} Belieze. Todos os direitos reservados.</span>
        <span>Trocas em até 7 dias · Pagamento via PIX e cartão</span>
      </div>
    </footer>
  )
}
