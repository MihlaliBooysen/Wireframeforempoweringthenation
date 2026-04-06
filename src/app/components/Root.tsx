import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/4f43b9c1e66f275ce86653e207aece8677c99c1b.png";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/quote", label: "Get Quote" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#003366] to-[#002147] text-white shadow-lg sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-[#002147] py-2">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+27123456789" className="flex items-center gap-2 hover:text-[#F97316] transition">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+27 12 345 6789</span>
              </a>
              <a href="mailto:info@empoweringthenation.co.za" className="flex items-center gap-2 hover:text-[#F97316] transition">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">info@empoweringthenation.co.za</span>
              </a>
            </div>
            <div className="text-xs hidden md:block">Empowering Communities Through Education</div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Empowering the Nation Logo" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition ${
                    isActive(link.path)
                      ? "bg-[#F97316] text-white font-semibold"
                      : "hover:bg-[#004080]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition ${
                    isActive(link.path)
                      ? "bg-[#F97316] text-white font-semibold"
                      : "hover:bg-[#004080]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#003366] to-[#002147] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <div className="mb-4">
                <img 
                  src={logo} 
                  alt="Empowering the Nation" 
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm">
                Empowering the Nation provides quality training programs for unemployed individuals,
                domestic workers, and gardeners to develop essential skills for better employment opportunities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-300 hover:text-[#F97316] transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>123 Training Street</li>
                <li>Johannesburg, South Africa</li>
                <li className="pt-2">
                  <a href="tel:+27123456789" className="hover:text-[#F97316] transition">
                    +27 12 345 6789
                  </a>
                </li>
                <li>
                  <a href="mailto:info@empoweringthenation.co.za" className="hover:text-[#F97316] transition">
                    info@empoweringthenation.co.za
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#004080] mt-8 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2026 Empowering the Nation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}