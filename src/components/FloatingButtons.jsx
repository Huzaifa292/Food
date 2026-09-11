import React from "react";
import { MessageCircle } from "lucide-react";
import { CAFE_INFO } from "../data/menuData";

export default function FloatingButtons({ cartCount, cartTotal }) {
  const scrollToOrder = () => {
    const el = document.getElementById("order");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${CAFE_INFO.whatsappNumber}?text=Hi%20${encodeURIComponent(CAFE_INFO.name)},%20I%20have%20an%20inquiry%20about%20your%20menu!`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${CAFE_INFO.name} on WhatsApp`}
        className={`floating-whatsapp-fab ${cartCount > 0 ? "has-sticky-bar" : ""}`}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 850,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 26px -6px rgba(37, 211, 102, 0.55)",
          animation: "pulseGlow 2.8s ease-in-out infinite",
          transition: "all 0.25s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <MessageCircle size={30} />
      </a>

      {/* Sticky Mobile Order Bar */}
      {cartCount > 0 && (
        <div
          className="mobile-sticky-order-bar"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 890,
            backgroundColor: "var(--pure-white)",
            borderTop: "1px solid var(--border-light)",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 -8px 24px -10px rgba(48, 27, 16, 0.2)",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.74rem",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                display: "block",
              }}
            >
              Order Total ({cartCount} {cartCount === 1 ? "item" : "items"})
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--espresso-dark)",
              }}
            >
              {CAFE_INFO.currency} {cartTotal.toLocaleString("en-PK")}
            </span>
          </div>

          <button
            onClick={scrollToOrder}
            className="btn btn-primary"
            style={{ padding: "10px 22px", fontSize: "0.9rem" }}
          >
            <span>Complete Order →</span>
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .mobile-sticky-order-bar {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
