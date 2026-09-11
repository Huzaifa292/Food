import React from "react";
import { Heart, Sparkles, Award, CheckCircle2 } from "lucide-react";
import { CAFE_INFO } from "../data/menuData";
import logoImg from "../assets/logo.jpeg";

export default function Story() {
  const highlights = [
    "Hand-Cut Farm Fresh Fruits Prepared Upon Order",
    "Pure Dairy Milk Slow-Infused with Real Cocoa & Nuts",
    "Zero Artificial Preservatives, Colors, or Chemicals",
    "Ethically Sourced Single-Origin Arabica Roasts",
    "Warm, Welcoming Brown & White Aesthetic Sanctuary",
  ];

  return (
    <section
      id="about"
      style={{
        padding: "90px 0",
        backgroundColor: "var(--pure-white)",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "54px",
            alignItems: "center",
          }}
          className="story-grid"
        >
          {/* Image & Stats Card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                border: "8px solid var(--cream-light)",
              }}
            >
              <img
                src="/images/story.jpg"
                alt="Ayan Cafe Fresh Hand-Cut Fruits, Honey Drizzle and Chilled Artisan Bottles"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>

            {/* Experience Floating Badge */}
            <div
              className="story-experience-badge"
              style={{
                position: "absolute",
                bottom: "-25px",
                left: "25px",
                backgroundColor: "var(--brown-deep)",
                color: "var(--cream-light)",
                borderRadius: "var(--radius-lg)",
                padding: "16px 22px",
                boxShadow: "var(--shadow-md)",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <img
                src={logoImg}
                alt="Ayan Cafe Badge"
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
                  display: "block",
                }}
              />
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontWeight: 700, lineHeight: 1 }}>
                  50,000+
                </p>
                <p style={{ fontSize: "0.8rem", color: "var(--latte-soft)", marginTop: "4px" }}>
                  Bottles & Delicacies Shared with Joy
                </p>
              </div>
            </div>
          </div>

          {/* Copy and Values */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <span className="eyebrow">
                <Heart size={14} color="var(--caramel-accent)" fill="var(--caramel-accent)" />
                Our Heritage & Philosophy
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.7rem)",
                lineHeight: 1.2,
                color: "var(--espresso-dark)",
              }}
            >
              Crafted with Care,{" "}
              <span style={{ color: "var(--caramel-accent)", fontStyle: "italic" }}>
                Shared with Joy
              </span>
            </h2>

            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.75 }}>
              At <strong>{CAFE_INFO.name}</strong>, we believe every cup and bottle tells a story of affection. Sourcing the freshest farm berries, hand-cutting exotic seasonal fruits, and slowly brewing rich Belgian chocolate and badam-pista milk, we craft everything without shortcuts or compromises.
            </p>

            <p style={{ color: "var(--text-secondary)", fontSize: "1.02rem", lineHeight: 1.75 }}>
              Whether you are savoring a chilled strawberry bottle on a sunny afternoon, gathering with friends in our warm brown & white sanctuary, or ordering to your doorstep, we welcome you as part of our family.
            </p>

            {/* Checklist items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
              {highlights.map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={18} color="var(--caramel-accent)" />
                  <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .story-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
      `}</style>
    </section>
  );
}
