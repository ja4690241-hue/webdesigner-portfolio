# Design Guide - Web Designer Portfolio

## Paleta de Cores

### Cores Primárias
- **Escuro Profundo**: `#0F172A` (background principal)
- **Escuro Secundário**: `#1E293B` (cards, backgrounds secundários)
- **Cinza Claro**: `#E2E8F0` (texto em backgrounds escuros)

### Cores de Destaque (Acentos)
- **Azul Vibrante**: `#3B82F6` (CTAs, hover primário)
- **Roxo Elegante**: `#A855F7` (gradientes, destaques secundários)
- **Ciano Moderno**: `#06B6D4` (acentos terciários)

### Cores Complementares
- **Verde Sucesso**: `#10B981` (badges, status positivo)
- **Laranja Quente**: `#F97316` (destaque, urgência)
- **Vermelho Suave**: `#EF4444` (erros, alertas)

## Tipografia

### Fonte Principal (Headings)
- **Família**: Inter (Google Fonts)
- **Pesos**: 700 (Bold), 600 (SemiBold)
- **Tamanho H1**: 3.5rem (mobile: 2rem)
- **Tamanho H2**: 2.5rem (mobile: 1.5rem)
- **Tamanho H3**: 1.875rem (mobile: 1.25rem)

### Fonte Secundária (Body)
- **Família**: Inter (Google Fonts)
- **Pesos**: 400 (Regular), 500 (Medium)
- **Tamanho Body**: 1rem (mobile: 0.95rem)
- **Line Height**: 1.6 (legibilidade)

## Espaçamento

- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

## Componentes Visuais

### Buttons
- **Primary**: Azul vibrante com hover roxo
- **Secondary**: Contorno com fundo transparente
- **Tamanho**: 48px altura (mobile), 56px (desktop)

### Cards
- **Background**: Escuro secundário com borda sutil
- **Border Radius**: 12px
- **Shadow**: Sombra suave (rgba(0,0,0,0.1))
- **Hover**: Elevação com sombra maior + escala 1.02

### Inputs & Forms
- **Background**: Escuro com borda cinza
- **Focus**: Borda azul vibrante
- **Border Radius**: 8px

## Animações (Framer Motion)

### Transições Padrão
- **Duração**: 0.3s (rápida), 0.5s (média), 0.8s (lenta)
- **Easing**: `easeInOut` para suavidade

### Tipos de Animação
- **Fade In**: Opacidade 0 → 1
- **Slide Up**: Y -20px → 0
- **Scale**: 0.95 → 1
- **Parallax**: Offset Y baseado em scroll

## Responsividade

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Estratégia Mobile-First
- Começar com layouts mobile
- Adicionar colunas e espaçamento em tablets
- Expandir para layouts complexos em desktop

## Imagens & Mídia

### Placeholder Elegantes
- Usar gradientes sofisticados
- Ícones minimalistas como overlay
- Aspect ratio 16:9 para portfólio
- Aspect ratio 1:1 para depoimentos

### Otimização
- WebP com fallback PNG
- Lazy loading para imagens abaixo do fold
- Compressão sem perda de qualidade

## Acessibilidade

- Contraste mínimo WCAG AA (4.5:1 para texto)
- Focus rings visíveis em todos os elementos interativos
- Suporte a teclado em navegação
- Textos alternativos em imagens
- Semântica HTML apropriada
