import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Church, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationLinks, ChurchInfo } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
export function WebsiteLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-primary rounded-xl illustrative-border text-primary-foreground transition-transform group-hover:rotate-6">
                <Church className="w-6 h-6" />
              </div>
              <span className="font-display text-xl font-bold hidden sm:inline-block">
                PPA <span className="text-secondary">Church</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {NavigationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-secondary",
                    location.pathname === link.href ? "text-secondary font-bold" : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle className="static" />
              <Button asChild className="illustrative-border bg-primary hover:bg-primary/90">
                <Link to="/contact">Join Us</Link>
              </Button>
            </nav>
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle className="static" />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col p-4 space-y-4">
              {NavigationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium px-4 py-2 hover:bg-accent rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full illustrative-border">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Join Us</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-muted py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Church className="w-6 h-6 text-primary" />
                <span className="font-display text-2xl font-bold">{ChurchInfo.name}</span>
              </div>
              <p className="text-muted-foreground text-pretty italic">
                "{ChurchInfo.mission}"
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>{ChurchInfo.location}</span>
                </li>
                <li className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-secondary" />
                  <span>{ChurchInfo.phone}</span>
                </li>
                <li className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-secondary" />
                  <span>{ChurchInfo.email}</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {NavigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Pentecost Paradise Assembly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}