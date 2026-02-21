# Cloudflare Workers + React Starter Template

[cloudflarebutton]

A production-ready full-stack starter template built with React, Tailwind CSS, shadcn/ui, and Cloudflare Workers. Features a modern UI with server-side API routes powered by Hono, seamless local development, and one-click deployment to Cloudflare.

## Features

- **React 18** with TypeScript and Vite for fast development
- **shadcn/ui** component library with Tailwind CSS and Radix UI primitives
- **Cloudflare Workers** backend with Hono routing
- **React Router** for client-side navigation
- **TanStack Query** for data fetching and caching
- **Zustand** for lightweight state management (Immer-enabled)
- **Dark/Light theme** support with `next-themes`
- **Responsive design** with mobile-first Tailwind utilities
- **Error boundaries** and client error reporting to Workers
- **Sidebar layout** ready-to-use with collapsible mobile support
- **Development tools**: Hot reload, type generation, linting
- **Production optimizations**: Tree-shaking, code-splitting, Cloudflare Pages compatibility

## Tech Stack

| Frontend | Backend | Tools & Utils |
|----------|---------|---------------|
| React 18 | Hono | Vite 6 |
| TypeScript 5 | Cloudflare Workers | Tailwind CSS 3 |
| shadcn/ui | Cloudflare KV/DO-ready | TanStack Query 5 |
| React Router 6 | | Bun |
| Lucide Icons | | Wrangler |
| Framer Motion | | ESLint + Prettier |

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (package manager)
- [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
- Node.js 20+ (for Wrangler)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Generate Worker types:

```bash
bun run cf-typegen
```

### Local Development

Start the development server (frontend + Workers proxy):

```bash
bun run dev
```

- Frontend: http://localhost:3000
- API routes: http://localhost:3000/api/*
- Edit UI in `src/`
- Add API routes in `worker/userRoutes.ts` (do **not** edit `worker/index.ts`)

Hot reload works for both frontend and Workers. API changes require a page refresh.

### Build for Production

```bash
bun run build
```

Outputs static assets to `dist/` ready for Cloudflare Pages.

### Deployment

Deploy to Cloudflare Workers/Pages:

```bash
bun run deploy
```

Or manually:

1. Build: `bun run build`
2. Deploy: `npx wrangler deploy`

[cloudflarebutton]

**Configuration**: Edit `wrangler.jsonc` for custom bindings (KV, D1, R2, etc.). API routes are automatically proxied.

## Usage Examples

### Adding API Routes

Extend `worker/userRoutes.ts`:

```typescript
import { Hono } from 'hono';

export function userRoutes(app: Hono<{ Bindings: Env }>) {
  app.get('/api/users', async (c) => {
    return c.json({ users: [] });
  });

  app.post('/api/users', async (c) => {
    const body = await c.req.json();
    // Handle POST
    return c.json({ success: true });
  });
}
```

Accessible at `/api/users`.

### Custom Pages

Add routes in `src/main.tsx`:

```tsx
const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/dashboard', element: <DashboardPage /> },
]);
```

### Using App Layout (Sidebar)

Wrap pages:

```tsx
import { AppLayout } from '@/components/layout/AppLayout';

export function DashboardPage() {
  return (
    <AppLayout>
      <h1>Dashboard</h1>
    </AppLayout>
  );
}
```

Customize sidebar in `src/components/app-sidebar.tsx`.

### Data Fetching

Use TanStack Query:

```tsx
import { useQuery } from '@tanstack/react-query';

function Users() {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json()),
  });
}
```

### Error Handling

Client errors auto-report to `/api/client-errors`. Use `<ErrorBoundary>` for UI fallbacks.

## Project Structure

```
├── src/              # React frontend
│   ├── components/   # UI components (shadcn/ui + custom)
│   ├── pages/        # Page components
│   ├── hooks/        # Custom hooks
│   └── lib/          # Utilities
├── worker/           # Cloudflare Workers API
│   ├── index.ts      # Core handler (DO NOT EDIT)
│   └── userRoutes.ts # Your API routes
├── tailwind.config.js # Tailwind + shadcn config
└── wrangler.jsonc    # Workers config
```

## Customization

- **shadcn/ui**: Run `bunx shadcn-ui@latest add <component>` to install more
- **Theme**: Edit `src/index.css` CSS vars
- **Remove demo**: Replace `src/pages/HomePage.tsx`
- **State**: Use Zustand stores in `src/stores/`
- **Charts/Forms**: Recharts, React Hook Form pre-configured

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build |
| `bun run lint` | Lint codebase |
| `bun run deploy` | Build + deploy to Cloudflare |
| `bun run cf-typegen` | Generate Worker types |

## Contributing

1. Fork & clone
2. Install deps: `bun install`
3. Create feature branch
4. Lint: `bun run lint`
5. Submit PR

## License

MIT License. See [LICENSE](LICENSE) for details.