# Belieze — Front-end

Front-end da loja Belieze (moda feminina), feito em React + Vite, com identidade visual baseada na marca (bege/dourado, serifa elegante).

## Rodando localmente

```bash
npm install
npm run dev
```

## O que já tem

- Home com destaque de coleção, banner de promoção (estilo Renner) e categorias
- Catálogo com filtro por categoria (Vestidos, Blusas, Calças, Conjuntos)
- Página de produto individual
- Carrinho (sacola) com contexto React, sem backend ainda — os dados somem ao recarregar a página
- Estrutura pronta pro deploy no GitHub Pages (`npm run deploy`, ajustar o campo `homepage` no `package.json` antes)

## Banner de promoção

O texto, imagem e link do banner da home ficam em `src/data/promo.js`. Pra trocar a promoção (tipo "3 peças = 25% OFF"), é só editar esse arquivo. Quando o painel admin existir, isso vira um campo editável direto no site.

## O que falta pra virar loja de verdade

1. **Backend** — API para produtos, pedidos e estoque (o combinado foi Node.js + PostgreSQL)
2. **Pagamento** — integração com Mercado Pago (ou outro gateway); o botão de checkout em `src/pages/Carrinho.jsx` já está marcado como o ponto de entrada
3. **Fotos reais dos produtos e do banner** — hoje usam um quadro com a folha da marca como placeholder
4. **Painel admin** — tela simples para cadastrar/editar produto e trocar o banner sem mexer em código
5. **Google Analytics** — adicionar o script de rastreamento quando o site for para produção
