import React from "react";
import { Truck, Check, MessageCircle, Clock, ShieldCheck, Thermometer } from "lucide-react";
import { CAFE_INFO } from "../data/menuData";

export default function DeliverySection() {
  const deliveryPerks = [
    "Custom insulated thermal drink carriers (steaming hot or icy cold)",
    "Eco-friendly 100% biodegradable craft packaging",
    "Real-time dispatch tracking and live updates via WhatsApp",
    "Zero-contact delivery options available upon request",
    "Free doorstep delivery on orders above Rs. 1500",
  ];

  return (
    <section
      id="delivery"
      style={{
        padding: "90px 0",
        background: "linear-gradient(150deg, var(--brown-deep) 0%, var(--espresso-dark) 100%)",
        color: "var(--cream-light)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft background ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-100px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232, 191, 176, 0.12), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "50px",
            alignItems: "center",
          }}
          className="delivery-grid"
        >
          {/* Left Column: Perks & CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ alignSelf: "flex-start" }}>
              <span
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "var(--latte-soft)",
                  border: "1px solid rgba(232,191,176,0.3)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  padding: "7px 18px",
                  borderRadius: "var(--radius-pill)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Truck size={15} />
                Swift & Temperature Controlled
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 2.9rem)",
                lineHeight: 1.2,
                color: "var(--cream-light)",
              }}
            >
              Freshness Delivered{" "}
              <span style={{ color: "var(--latte-soft)", fontStyle: "italic" }}>
                in 30 - 45 Minutes
              </span>
            </h2>

            <p style={{ color: "var(--latte-soft)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "520px" }}>
              Craving a silky flat white or a warm croissant at your home or office desk? Our specialized couriers deliver within our 10km radius with precision thermal packaging.
            </p>

            {/* Checklist */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "10px 0 16px" }}>
              {deliveryPerks.map((perk, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "var(--caramel-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFF",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: "0.95rem", color: "var(--cream-light)", lineHeight: 1.5 }}>
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/${CAFE_INFO.whatsappNumber}?text=Hi%20${encodeURIComponent(CAFE_INFO.name)},%20I%20would%20like%20to%20order%20for%20home%20delivery!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp delivery-btn"
                style={{ padding: "16px 30px" }}
              >
                <MessageCircle size={19} />
                <span>Instant WhatsApp Delivery Order</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Stats Glass Card */}
          <div>
            <div
              className="delivery-stats-card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(232, 191, 176, 0.25)",
                borderRadius: "var(--radius-xl)",
                padding: "40px 32px",
                backdropFilter: "blur(12px)",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "16px",
                    backgroundColor: "rgba(232, 191, 176, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--latte-soft)",
                  }}
                >
                  <Clock size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--latte-soft)", lineHeight: 1 }}>
                    30-45 Mins
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--cream-light)", opacity: 0.8, marginTop: "4px" }}>
                    Average doorstep arrival time
                  </p>
                </div>
              </div>

              <div style={{ height: "1px", backgroundColor: "rgba(232, 191, 176, 0.18)" }} />

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "16px",
                    backgroundColor: "rgba(232, 191, 176, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--latte-soft)",
                  }}
                >
                  <Thermometer size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--latte-soft)", lineHeight: 1 }}>
                    Thermal Shield
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--cream-light)", opacity: 0.8, marginTop: "4px" }}>
                    Hot stays piping, iced stays frost-chilled
                  </p>
                </div>
              </div>

              <div style={{ height: "1px", backgroundColor: "rgba(232, 191, 176, 0.18)" }} />

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "16px",
                    backgroundColor: "rgba(232, 191, 176, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--latte-soft)",
                  }}
                >
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--latte-soft)", lineHeight: 1 }}>
                    100% Spill-Proof
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--cream-light)", opacity: 0.8, marginTop: "4px" }}>
                    Free replacement if not in pristine shape
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .delivery-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
