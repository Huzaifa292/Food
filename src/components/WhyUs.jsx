import React from "react";
import { Coffee, Flame, HeartHandshake, Truck, Sparkles } from "lucide-react";
import { WHY_US } from "../data/menuData";

export default function WhyUs() {
  const iconMap = {
    Bean: <Coffee size={28} />,
    Flame: <Flame size={28} />,
    HeartHandshake: <HeartHandshake size={28} />,
    Truck: <Truck size={28} />,
  };

  return (
    <section
      id="why-us"
      style={{
        padding: "90px 0",
        backgroundColor: "var(--pure-white)",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">
            <Sparkles size={14} />
            The Ayan Difference
          </span>
          <h2>Why Our Patrons Adore Us</h2>
          <p>
            We believe dining is an emotional journey. We uphold uncompromising standards for freshness, ethical sourcing, and heartfelt hospitality.
          </p>
        </div>

        <div
          className="why-us-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          {WHY_US.map((feature, idx) => (
            <div
              key={idx}
              className="why-us-card"
              style={{
                backgroundColor: "var(--cream-light)",
                borderRadius: "var(--radius-xl)",
                padding: "36px 28px",
                textAlign: "center",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                transition: "var(--transition)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.backgroundColor = "var(--cream-deep)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                e.currentTarget.style.backgroundColor = "var(--cream-light)";
              }}
            >
              {/* Icon Circle */}
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  backgroundColor: "var(--pure-white)",
                  color: "var(--caramel-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "22px",
                  boxShadow: "var(--shadow-sm)",
                  border: "2px solid var(--latte-soft)",
                }}
              >
                {iconMap[feature.icon] || <Sparkles size={28} />}
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--espresso-dark)",
                  marginBottom: "12px",
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
