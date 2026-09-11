import React from "react";
import { MessageCircle } from "lucide-react";
import { CAFE_INFO } from "../data/menuData";

export default function BulkCatering() {
  const whatsappBulkUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=Hi!%20I'm%20interested%20in%20a%20bulk%20order.%0AOrganization%2FCompany%20Name:%20%0AEstimated%20Quantity:%20%0APreferred%20Delivery%20Date:%20`;

  return (
    <section
      id="bulk"
      className="bulk"
      style={{
        background: "linear-gradient(135deg, var(--blush-deeper, #B6624B), var(--brown, #4A2E1C))",
        position: "relative",
        padding: "80px 0 90px",
        overflow: "hidden",
      }}
    >
      {/* Anchor for backward compatibility */}
      <div id="bulk-orders" style={{ position: "absolute", top: "-50px" }} />

      {/* Decorative top scallop wave */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 200 10"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "20px", display: "block", fill: "var(--pure-white, #FFFDFB)" }}
        >
          <path d="M0,10 Q5,0 10,10 Q15,0 20,10 Q25,0 30,10 Q35,0 40,10 Q45,0 50,10 Q55,0 60,10 Q65,0 70,10 Q75,0 80,10 Q85,0 90,10 Q95,0 100,10 Q105,0 110,10 Q115,0 120,10 Q125,0 130,10 Q135,0 140,10 Q145,0 150,10 Q155,0 160,10 Q165,0 170,10 Q175,0 180,10 Q185,0 190,10 Q195,0 200,10 Z" />
        </svg>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="bulk-card"
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
            backgroundColor: "var(--pure-white, #FFFDFB)",
            borderRadius: "32px",
            padding: "56px 36px",
            boxShadow: "0 18px 45px -12px rgba(45, 26, 16, 0.35)",
            border: "1px solid rgba(255, 255, 255, 0.6)",
          }}
        >
          <span
            className="eyebrow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "var(--blush-deeper, #B6624B)",
              backgroundColor: "var(--cream, #FBF2ED)",
              padding: "8px 18px",
              borderRadius: "999px",
              marginBottom: "16px",
            }}
          >
            Bulk Orders
          </span>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.7rem, 4vw, 2.4rem)",
              color: "var(--brown, #4A2E1C)",
              marginBottom: "14px",
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            Looking for Bulk Orders?
          </h2>

          <p
            style={{
              color: "var(--brown-soft, #7A5A45)",
              lineHeight: 1.7,
              fontSize: "1.02rem",
              maxWidth: "48ch",
              margin: "0 auto 26px",
            }}
          >
            We are now delivering to Schools, Offices, Universities, Corporate Events, and Institutions across Karachi perfect for meetings, celebrations, and any gathering that could use something sweet.
          </p>

          <div
            className="pill-list"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "30px",
            }}
          >
            <span
              className="pill"
              style={{
                backgroundColor: "var(--cream-deep, #F5E5DB)",
                color: "var(--brown, #4A2E1C)",
                padding: "9px 18px",
                borderRadius: "999px",
                fontSize: "0.9rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                border: "1px solid rgba(74, 46, 28, 0.08)",
              }}
            >
              🏫 Schools
            </span>

            <span
              className="pill"
              style={{
                backgroundColor: "var(--cream-deep, #F5E5DB)",
                color: "var(--brown, #4A2E1C)",
                padding: "9px 18px",
                borderRadius: "999px",
                fontSize: "0.9rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                border: "1px solid rgba(74, 46, 28, 0.08)",
              }}
            >
              🏢 Offices
            </span>

            <span
              className="pill"
              style={{
                backgroundColor: "var(--cream-deep, #F5E5DB)",
                color: "var(--brown, #4A2E1C)",
                padding: "9px 18px",
                borderRadius: "999px",
                fontSize: "0.9rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                border: "1px solid rgba(74, 46, 28, 0.08)",
              }}
            >
              🎓 Universities
            </span>

            <span
              className="pill"
              style={{
                backgroundColor: "var(--cream-deep, #F5E5DB)",
                color: "var(--brown, #4A2E1C)",
                padding: "9px 18px",
                borderRadius: "999px",
                fontSize: "0.9rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                border: "1px solid rgba(74, 46, 28, 0.08)",
              }}
            >
              🎉 Corporate Events
            </span>
          </div>

          <a
            href={whatsappBulkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              padding: "15px 34px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "0.98rem",
              border: "2px solid transparent",
              cursor: "pointer",
              transition: "transform 0.25s, box-shadow 0.25s, background 0.25s",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "var(--brown, #4A2E1C)",
              color: "var(--cream, #FBF2ED)",
              boxShadow: "0 10px 24px -10px rgba(74,46,28,0.5)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.backgroundColor = "var(--blush-deeper, #B6624B)";
              e.currentTarget.style.boxShadow = "0 14px 28px -10px rgba(182,98,75,0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor = "var(--brown, #4A2E1C)";
              e.currentTarget.style.boxShadow = "0 10px 24px -10px rgba(74,46,28,0.5)";
            }}
          >
            <MessageCircle size={18} />
            <span>Contact Us Now</span>
          </a>
        </div>
      </div>

      {/* Decorative bottom scallop wave */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          transform: "rotate(180deg)",
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 200 10"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "20px", display: "block", fill: "var(--pure-white, #FFFDFB)" }}
        >
          <path d="M0,10 Q5,0 10,10 Q15,0 20,10 Q25,0 30,10 Q35,0 40,10 Q45,0 50,10 Q55,0 60,10 Q65,0 70,10 Q75,0 80,10 Q85,0 90,10 Q95,0 100,10 Q105,0 110,10 Q115,0 120,10 Q125,0 130,10 Q135,0 140,10 Q145,0 150,10 Q155,0 160,10 Q165,0 170,10 Q175,0 180,10 Q185,0 190,10 Q195,0 200,10 Z" />
        </svg>
      </div>
    </section>
  );
}
