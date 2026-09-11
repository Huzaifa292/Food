import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { CAFE_INFO } from "../data/menuData";
import logoImg from "../assets/logo.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Fruit Cup (Rs. 200)", href: "#fruit-cup" },
    { label: "Order Now", href: "#order" },
    { label: "Location & Timings", href: "#location" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? "var(--glass-nav)" : "rgba(251, 245, 240, 0.96)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(68, 39, 24, 0.08)",
        transition: "var(--transition)",
      }}
    >
      <div
        className="container nav-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 24px",
          gap: "12px",
        }}
      >
        {/* Brand Logo & Name */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
          }}
        >
          <img
            src={logoImg}
            alt="Ayan Cafe Logo"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/logo.jpeg";
            }}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "var(--shadow-sm)",
              border: "2px solid var(--latte-soft)",
              backgroundColor: "#3E2314",
              display: "block",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.28rem",
                fontWeight: 700,
                color: "var(--espresso-dark)",
                lineHeight: 1.1,
                letterSpacing: "0.3px",
                whiteSpace: "nowrap",
              }}
            >
              {CAFE_INFO.name}
            </span>
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "var(--caramel-accent)",
                letterSpacing: "0.9px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Crafted with Care
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "16px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                transition: "var(--transition)",
                whiteSpace: "nowrap",
                padding: "6px 8px",
                borderRadius: "var(--radius-pill)",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "var(--caramel-accent)";
                e.target.style.backgroundColor = "rgba(180, 105, 78, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--text-secondary)";
                e.target.style.backgroundColor = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons (WhatsApp CTA only, NO cart icon) */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          {/* WhatsApp Direct Order CTA (Desktop) */}
          <a
            href={`https://wa.me/${CAFE_INFO.whatsappNumber}?text=Hi%20${encodeURIComponent(CAFE_INFO.name)},%20I%20would%20like%20to%20place%20an%20order!`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp whatsapp-desktop-btn"
            style={{
              padding: "9px 20px",
              fontSize: "0.86rem",
              borderRadius: "var(--radius-pill)",
              display: "none",
              whiteSpace: "nowrap",
            }}
          >
            <MessageCircle size={16} />
            <span>Order on WhatsApp</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle Navigation Menu"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: "var(--pure-white)",
              border: "1.5px solid var(--border-light)",
              color: "var(--brown-deep)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--cream-light)",
            borderBottom: "2px solid var(--cream-deep)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--espresso-dark)",
                padding: "8px 0",
                borderBottom: "1px solid var(--border-light)",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
            <a
              href="#order"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: "100%", padding: "10px", justifyContent: "center" }}
            >
              <span>Place an Order</span>
            </a>
            <a
              href={`https://wa.me/${CAFE_INFO.whatsappNumber}?text=Hi%20${encodeURIComponent(CAFE_INFO.name)},%20I%20would%20like%20to%20place%20an%20order!`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: "100%", padding: "10px", justifyContent: "center" }}
            >
              <MessageCircle size={16} />
              <span>Chat & Order on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Media query styling */}
      <style>{`
        @media (max-width: 959px) {
          .nav-container {
            padding: 10px 16px !important;
          }
        }
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .whatsapp-desktop-btn { display: inline-flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
