import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { brandTurquoise, logoUrl } from "@/lib/siteContent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const navLinks = [
    {
      name: "HOME",
      href: "/",
      isActive: pathname === "/" && hash !== "#impact",
    },
    {
      name: "IMPACT",
      href: "/#impact",
      isActive: pathname === "/" && hash === "#impact",
    },
    { name: "SERVICES", href: "/services", isActive: pathname === "/services" },
    { name: "PRODUCTS", href: "/products", isActive: pathname === "/products" },
    { name: "TRAINING", href: "/training", isActive: pathname === "/training" },
    { name: "ABOUT", href: "/about", isActive: pathname === "/about" },
    { name: "CONTACT", href: "/contact", isActive: pathname === "/contact" },
  ];

  const desktopLinkClass = (isActive: boolean) =>
    `inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold tracking-[0.18em] transition-all duration-300 ${
      isActive
        ? "border-white/20 bg-white/6 text-white"
        : "border-transparent text-white/80 hover:border-white/12 hover:bg-white/6 hover:text-cyan-300"
    }`;

  const mobileLinkClass = (isActive: boolean) =>
    `block rounded-2xl border px-4 py-4 text-base font-semibold tracking-[0.16em] transition-all duration-300 ${
      isActive
        ? "border-white/15 bg-white/10 text-white"
        : "border-transparent text-white/78 hover:border-white/10 hover:bg-white/6 hover:text-cyan-300"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 text-white shadow-[0_10px_40px_rgba(2,6,23,0.35)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div
              className="h-12 w-12 rounded-full border overflow-hidden transition-transform duration-300 group-hover:scale-105"
              style={{ borderColor: `${brandTurquoise}4d` }}
            >
              <img
                src={logoUrl}
                alt="Addis Tech Group"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg font-semibold  text-white sm:text-xl">
              Addis Tech Group
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={desktopLinkClass(link.isActive)}
                style={
                  link.isActive
                    ? {
                        color: brandTurquoise,
                        borderColor: `${brandTurquoise}55`,
                        backgroundColor: `${brandTurquoise}14`,
                      }
                    : undefined
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition-colors hover:text-cyan-300"
              style={
                isOpen
                  ? {
                      color: brandTurquoise,
                      borderColor: `${brandTurquoise}40`,
                    }
                  : undefined
              }
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 md:hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkClass(link.isActive)}
                  style={
                    link.isActive
                      ? {
                          color: brandTurquoise,
                          backgroundColor: `${brandTurquoise}14`,
                          borderColor: `${brandTurquoise}44`,
                        }
                      : undefined
                  }
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
