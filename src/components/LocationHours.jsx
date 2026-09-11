import React from "react";
import { MapPin, Clock, Phone, Mail, Navigation, Sparkles, CheckCircle2 } from "lucide-react";
import { CAFE_INFO } from "../data/menuData";

export default function LocationHours() {
  return (
    <section
      id="location"
      style={{
        padding: "90px 0",
        backgroundColor: "var(--cream-light)",
        position: "relative",
      }}
    >
      <div id="contact" style={{ position: "absolute", top: "-40px" }} />
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">
            <MapPin size={14} />
            Visit Our Sanctuary
          </span>
          <h2>Location, Timings & Contact</h2>
          <p>
            Whether you desire a peaceful morning cappuccino or an ambient late-night hangout with dessert, our doors and delivery lines are open for you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "36px",
          }}
          className="location-grid"
        >
          {/* Information Cards Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {/* Open Now Live Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "var(--pure-white)",
                border: "1px solid var(--border-light)",
                padding: "8px 18px",
                borderRadius: "var(--radius-pill)",
                width: "fit-content",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  backgroundColor: "#25D366",
                  animation: "pulseGlow 2s infinite",
                }}
              />
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--espresso-dark)" }}>
                Open Today: 6:00 PM – 10:00 PM
              </span>
            </div>

            {/* Timings Card */}
            <div
              style={{
                backgroundColor: "var(--pure-white)",
                borderRadius: "var(--radius-lg)",
                padding: "26px",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <Clock size={20} color="var(--caramel-accent)" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--espresso-dark)" }}>
                  Operating Hours
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.92rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-light)", paddingBottom: "6px" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Monday – Sunday:</span>
                  <span style={{ fontWeight: 700, color: "var(--espresso-dark)" }}>6:00 PM – 10:00 PM</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "4px" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Fresh Bakes & Shakes:</span>
                  <span style={{ fontWeight: 700, color: "var(--caramel-accent)" }}>All 7 Days</span>
                </div>
              </div>
            </div>

            {/* Address & Contact Card */}
            <div
              style={{
                backgroundColor: "var(--pure-white)",
                borderRadius: "var(--radius-lg)",
                padding: "26px",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <MapPin size={20} color="var(--caramel-accent)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--espresso-dark)" }}>
                    Address
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {CAFE_INFO.address}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Phone size={18} color="var(--caramel-accent)" />
                <div>
                  <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>Phone / WhatsApp: </span>
                  <a
                    href={`https://wa.me/${CAFE_INFO.whatsappNumber}`}
                    style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--caramel-accent)" }}
                  >
                    {CAFE_INFO.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Mail size={18} color="var(--caramel-accent)" />
                <div>
                  <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>Email: </span>
                  <a
                    href={`mailto:${CAFE_INFO.email}`}
                    style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--caramel-accent)" }}
                  >
                    {CAFE_INFO.email}
                  </a>
                </div>
              </div>

              <div style={{ marginTop: "6px" }}>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CAFE_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ width: "100%", borderRadius: "var(--radius-pill)", padding: "11px" }}
                >
                  <Navigation size={16} />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Iframe */}
          <div
            className="location-map-wrap"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "360px",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              border: "6px solid var(--pure-white)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <iframe
              title="Ayan Cafe Location Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(CAFE_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .location-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
      `}</style>
    </section>
  );
}
