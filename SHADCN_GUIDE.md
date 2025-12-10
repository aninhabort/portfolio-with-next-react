# shadcn/ui - Guia de Uso

O shadcn/ui foi configurado com sucesso no seu projeto! 🎉

## Componentes Instalados

- ✅ **Button** - Botões estilizados
- ✅ **Card** - Cards para conteúdo
- ✅ **Input** - Campos de entrada de texto
- ✅ **Textarea** - Campos de texto multilinha

## Como Adicionar Mais Componentes

Para adicionar novos componentes do shadcn/ui, use o comando:

```bash
npx shadcn@latest add [component-name]
```

### Componentes Disponíveis

Alguns componentes populares que você pode adicionar:

```bash
# Formulários
npx shadcn@latest add form label select checkbox radio-group switch

# Navegação
npx shadcn@latest add tabs navigation-menu menubar

# Feedback
npx shadcn@latest add alert dialog toast tooltip

# Layout
npx shadcn@latest add separator avatar badge sheet

# Data Display
npx shadcn@latest add table accordion calendar
```

## Exemplo de Uso

### Button
```tsx
import { Button } from "@/components/ui/button"

<Button variant="default">Click me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Card
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

### Input & Textarea
```tsx
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

<Input placeholder="Enter text..." />
<Textarea placeholder="Enter message..." />
```

## Exemplo Real

O componente `Contacts.tsx` foi atualizado para usar os componentes do shadcn/ui. Confira o código para ver um exemplo completo em ação!

## Documentação Completa

- [shadcn/ui Docs](https://ui.shadcn.com)
- [Todos os Componentes](https://ui.shadcn.com/docs/components)

## Utilitário cn()

Use a função `cn()` para combinar classes Tailwind condicionalmente:

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", isActive && "active-class")} />
```
