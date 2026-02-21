import React from 'react';
import { Outlet } from 'react-router-dom';
import { WebsiteLayout } from './WebsiteLayout';
import { Toaster } from '@/components/ui/sonner';
export function LayoutWrapper(): JSX.Element {
  return (
    <WebsiteLayout>
      <Outlet />
      <Toaster richColors closeButton position="top-center" />
    </WebsiteLayout>
  );
}