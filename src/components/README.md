# Components Structure

A estrutura de componentes está organizada de forma modular e escalável:

```
src/components/
├── index.ts                 # Barrel export - ponto central de importação
├── layout/                  # Componentes de layout
│   ├── Header.tsx
│   └── index.ts
├── pages/                   # Componentes de páginas principais
│   ├── About.tsx
│   ├── Resume.tsx
│   ├── Projects.tsx
│   ├── Contacts.tsx
│   └── index.ts
├── navigation/              # Componentes de navegação
│   ├── NavigationButton.tsx
│   ├── NavigationMenu.tsx
│   └── index.ts
├── ui/                      # Componentes UI do shadcn/ui
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── textarea.tsx
└── Infos.tsx               # Componente de perfil/informações
```

## Como Importar

### ✅ Recomendado (Barrel Import)
```tsx
import { Header, About, NavigationMenu, Button } from "@/components";
```

### ❌ Evitar (Imports diretos)
```tsx
import Header from "@/components/layout/Header";
import About from "@/components/pages/About";
```

## Organização por Categoria

### Layout (`/layout`)
- Componentes estruturais da aplicação
- Header, Footer, Sidebar, etc.

### Pages (`/pages`)
- Componentes que representam páginas completas
- About, Resume, Projects, Contacts

### Navigation (`/navigation`)
- Componentes relacionados à navegação
- NavigationButton, NavigationMenu

### UI (`/ui`)
- Componentes do shadcn/ui
- Componentes de interface reutilizáveis

## Boas Práticas

1. **Use barrel imports** - Sempre importe do `@/components`
2. **Mantenha a hierarquia** - Novos componentes devem ir na pasta apropriada
3. **Atualize index.ts** - Sempre exporte novos componentes no index
4. **Co-locação** - Mantenha componentes relacionados próximos

## Adicionando Novos Componentes

1. Crie o componente na pasta apropriada
2. Adicione o export no `index.ts` da pasta
3. O export será automaticamente disponibilizado via barrel

Exemplo:
```tsx
// src/components/layout/Footer.tsx
const Footer = () => { ... }
export default Footer;

// src/components/layout/index.ts
export { default as Footer } from "./Footer";

// Agora pode usar:
import { Footer } from "@/components";
```
