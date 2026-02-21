import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { WebsiteLayout } from '@/components/layout/WebsiteLayout';
import { Toaster } from '@/components/ui/sonner';
const queryClient = new QueryClient();
// Wrap pages in WebsiteLayout
function LayoutWrapper() {
  return (
    <WebsiteLayout>
      <Outlet />
      <Toaster richColors closeButton position="top-center" />
    </WebsiteLayout>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      // Placeholders for Phase 2
      { path: "/ministries", element: <div className="py-24 text-center font-display text-2xl">Ministries Page Coming Soon</div> },
      { path: "/sermons", element: <div className="py-24 text-center font-display text-2xl">Sermons Archive Coming Soon</div> },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)