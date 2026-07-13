import { Outlet, Link, useLocation } from "react-router-dom";
import { Download, LayoutDashboard, FileText, Phone, LogIn, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Download APK", href: "/download", icon: Download },
    { name: "Guide", href: "/guide", icon: FileText },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src="/logo.svg" alt="Vishnu Mobiles Logo" className="h-10 w-auto rounded-lg object-contain overflow-hidden" />
            <span className="text-lg font-bold text-gray-900 tracking-tight">Vishnu Mobile Shop</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="ml-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <LogIn className="h-4 w-4 mr-1.5" />
              Staff Login
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-gray-100 bg-white overflow-hidden z-40"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium px-4 py-3 rounded-xl transition-colors flex items-center gap-3 ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <link.icon className="h-5 w-5" />
                  {link.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-medium text-white"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Staff Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="Vishnu Mobiles Logo" className="h-8 w-auto rounded overflow-hidden object-contain" />
                <span className="text-lg font-bold text-gray-900">Vishnu Mobile Shop</span>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed">
                Private internal business portal for the Vishnu Mobile Shop App. Only for authorized owner and staff.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm text-gray-500 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2.5">
                <li><span className="text-sm text-gray-500 cursor-default">Privacy Policy</span></li>
                <li><span className="text-sm text-gray-500 cursor-default">Terms of Service</span></li>
                <li><span className="text-sm text-gray-500 cursor-default">Data Policy</span></li>
              </ul>
            </div>

            {/* Version Info */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">App Info</h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li>Current Version: <strong className="text-gray-700">2.3.1</strong></li>
                <li>Last Updated: <strong className="text-gray-700">Oct 15, 2026</strong></li>
                <li>Platform: <strong className="text-gray-700">Android 8.0+</strong></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Vishnu Mobile Shop. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">Internal Business Portal · v2.3.1</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
