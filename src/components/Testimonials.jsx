import React from "react";
import { Star, MessageSquare, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/menuData";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      style={{
        padding: "90px 0",
        backgroundColor: "var(--pure-white)",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">
            <MessageSquare size={14} />
            Patron Love
          </span>
          <h2>Words from Our Cherished Guests</h2>
          <p>
            Nothing brings us deeper fulfillment than seeing smiles across our cafe tables and hearing how our deliveries brighten your busy days.
          </p>
        </div>

        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="testimonial-card"
              style={{
                backgroundColor: "var(--cream-light)",
                borderRadius: "var(--radius-xl)",
                padding: "34px 28px",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                position: "relative",
                transition: "var(--transition)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              }}
            >
              {/* Star Rating */}
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={17} fill="#D49B26" color="#D49B26" />
                ))}
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                "{review.comment}"
              </p>

              {/* Patron Info Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  paddingTop: "14px",
                  borderTop: "1px solid var(--border-light)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--brown-mocha) 0%, var(--caramel-accent) 100%)",
                    color: "#FFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.95rem",
                    flexShrink: 0,
                  }}
                >
                  {review.avatarText}
                </div>

                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--espresso-dark)" }}>
                    {review.name}
                  </h4>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                    {review.role} • {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
