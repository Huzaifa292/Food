import React from "react";
import { Heart, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { CAFE_INFO } from "../data/menuData";
import logoImg from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--espresso-dark, #2D1A10)",
        color: "var(--cream-light, #FBF5F0)",
        padding: "45px 0 25px",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            paddingBottom: "30px",
            borderBottom: "1px solid rgba(232, 191, 176, 0.15)",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src={logoImg}
              alt="Ayan Cafe Logo"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/logo.jpeg";
              }}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid var(--latte-soft)",
                backgroundColor: "#3E2314",
              }}
            />
            <div>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "var(--cream-light)",
                  display: "block",
                  lineHeight: 1.1,
                }}
              >
                {CAFE_INFO.name}
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--caramel-accent)", fontStyle: "italic" }}>
                Fresh Fruit Cups • Prepared Daily
              </span>
            </div>
          </div>

          {/* Quick Info */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", fontSize: "0.86rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--latte-soft)" }}>
              <Clock size={15} color="var(--caramel-accent)" />
              <span>Mon – Sun: 6:00 PM – 10:00 PM</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--latte-soft)" }}>
              <MapPin size={15} color="var(--caramel-accent)" />
              <span>Wireless Gate, Karachi</span>
            </div>
            <a
              href={`mailto:${CAFE_INFO.email}`}
              style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--latte-soft)", textDecoration: "none" }}
            >
              <Mail size={15} color="var(--caramel-accent)" />
              <span>{CAFE_INFO.email}</span>
            </a>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${CAFE_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: "8px 18px", fontSize: "0.85rem" }}
          >
            <MessageCircle size={15} />
            <span>WhatsApp: {CAFE_INFO.phone}</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            fontSize: "0.8rem",
            opacity: 0.75,
          }}
        >
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} {CAFE_INFO.name}. All rights reserved.</p>
          <p style={{ margin: 0, display: "flex", alignItems: "center", gap: "6px" }}>
            <Heart size={13} fill="var(--caramel-accent)" color="var(--caramel-accent)" /> Crafted with Care, Shared with Joy.
          </p>
        </div>
      </div>
    </footer>
  );
}
