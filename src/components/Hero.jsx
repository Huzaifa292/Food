import React from "react";
import { Sparkles, MessageCircle, ArrowRight, Star, Clock, ShieldCheck } from "lucide-react";
import { CAFE_INFO } from "../data/menuData";
import logoImg from "../assets/logo.jpeg";

export default function Hero({ onOpenReservation }) {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        padding: "50px 0 80px",
        background: `
          radial-gradient(ellipse 650px 420px at 85% 0%, var(--latte-soft) 0%, transparent 60%),
          radial-gradient(ellipse 550px 380px at 5% 90%, var(--cream-deep) 0%, transparent 55%),
          var(--cream-light)
        `,
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Copy & CTAs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              textAlign: "left",
            }}
          >
            {/* Top Logo & Eyebrow Badge Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <img
                src={logoImg}
                alt="Ayan Cafe Seal"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/logo.jpeg";
                }}
                style={{
                  width: "78px",
                  height: "78px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "var(--shadow-md)",
                  border: "4px solid var(--pure-white)",
                  backgroundColor: "#3E2314",
                  display: "block",
                }}
              />
              <span className="eyebrow">
                <Sparkles size={14} />
                {CAFE_INFO.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-headline"
              style={{
                fontSize: "clamp(2.1rem, 5.5vw, 3.6rem)",
                lineHeight: 1.15,
                fontWeight: 700,
                color: "var(--espresso-dark)",
              }}
            >
              Fresh Fruit Cups,{" "}
              <span
                style={{
                  color: "var(--caramel-accent)",
                  fontStyle: "italic",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Made Fresh Daily
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(0.98rem, 2vw, 1.18rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              Welcome to <strong>Ayan Cafe</strong>. Indulge in our signature fresh fruit cups packed with hand-cut sweet strawberries, kiwi, ripe mango cubes, blueberries, banana, and crisp grapes.
            </p>

            {/* Price Badge Callout */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "var(--pure-white)",
                border: "2px solid var(--caramel-accent)",
                padding: "8px 20px",
                borderRadius: "var(--radius-pill)",
                width: "fit-content",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.5px" }}>
                Special Price:
              </span>
              <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--caramel-accent)", fontFamily: "'Playfair Display', serif" }}>
                Rs. 200
              </span>
              <span style={{ fontSize: "0.78rem", backgroundColor: "#E8F8EE", color: "#1E7E34", fontWeight: 800, padding: "3px 10px", borderRadius: "999px" }}>
                Available Now
              </span>
            </div>

            {/* Action Buttons */}
            <div
              className="hero-actions"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
                paddingTop: "6px",
              }}
            >
              <a href="#order" className="btn btn-primary">
                <span>Order Now (Rs. 200)</span>
                <ArrowRight size={17} />
              </a>

              <a
                href={`https://wa.me/${CAFE_INFO.whatsappNumber}?text=Hi%20${encodeURIComponent(CAFE_INFO.name)},%20I%20would%20like%20to%20order%20the%20Fresh%20Fruit%20Cup!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={17} />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Micro Highlights Row */}
            <div
              className="hero-trust-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                paddingTop: "14px",
                borderTop: "1px solid var(--border-light)",
                marginTop: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Star size={18} fill="#D49B26" color="#D49B26" />
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--espresso-dark)" }}>
                  4.9 / 5.0 Rating
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Clock size={18} color="var(--caramel-accent)" />
                <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                  30-45 Min Chilled Delivery
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ShieldCheck size={18} color="var(--brown-mocha)" />
                <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                  100% Fresh Guarantee
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Main Featured Photo */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                aspectRatio: "4/5",
                maxHeight: "500px",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                border: "6px solid var(--pure-white)",
                backgroundColor: "var(--cream-deep)",
              }}
            >
              <img
                src="/images/fruit.jpeg"
                alt="Ayan Cafe Signature Fresh Fruit Cup"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />

              {/* Price & Available Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                  backgroundColor: "rgba(45, 26, 16, 0.9)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  padding: "14px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#FFF",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.74rem", color: "#25D366", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px", display: "flex", alignItems: "center", gap: "4px" }}>
                    <span>✨</span> Available to Order Today
                  </span>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, marginTop: "2px" }}>
                    Signature Fresh Fruit Cup
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "0.7rem", color: "var(--cream-light)", opacity: 0.8, display: "block" }}>Price</span>
                  <span style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--caramel-accent)", fontFamily: "'Playfair Display', serif" }}>
                    Rs. 200
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
