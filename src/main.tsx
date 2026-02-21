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
import MinistriesPage from '@/pages/MinistriesPage'
import SermonsPage from '@/pages/SermonsPage'
import EventsPage from '@/pages/EventsPage'
import { WebsiteLayout } from '@/components/layout/WebsiteLayout';
import { Toaster } from '@/components/ui/sonner';
const queryClient = new QueryClient();// Wrap pages in WebsiteLayout
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';

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
      { path: "/ministries", element: <MinistriesPage /> },
      { path: "/sermons", element: <SermonsPage /> },
      { path: "/events", element: <EventsPage /> },
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