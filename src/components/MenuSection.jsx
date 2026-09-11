import React from "react";
import { Sparkles, Clock, Flame, Check, ArrowRight, Heart } from "lucide-react";
import { CAFE_INFO, MENU_ITEMS } from "../data/menuData";

export default function MenuSection({ onAddToCart }) {
  const fruitCup = MENU_ITEMS.find((item) => item.id === 1) || {
    id: 1,
    name: "Ayan Signature Fresh Fruit Cup",
    price: 200,
    desc: "A vibrant wholesome cup packed with hand-cut sweet strawberries, kiwi, ripe mango cubes, blueberries, banana, and crisp grapes, finished with our house mint accent.",
    image: "/images/fruit.jpeg",
    prepTime: "Freshly Assembled",
    calories: "160 kcal",
  };

  const ingredients = [
    { name: "Fresh Strawberries", emoji: "🍓" },
    { name: "Ripe Mango Cubes", emoji: "🥭" },
    { name: "Exotic Kiwi Slices", emoji: "🥝" },
    { name: "Crisp Grapes", emoji: "🍇" },
    { name: "Sweet Banana", emoji: "🍌" },
    { name: "Fresh Blueberries", emoji: "🫐" },
    { name: "Organic House Mint", emoji: "🌿" },
  ];

  const handleOrderClick = () => {
    if (onAddToCart) onAddToCart(fruitCup);
    const orderSection = document.getElementById("order");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="menu"
      style={{
        padding: "80px 0",
        backgroundColor: "var(--cream-light, #FBF5F0)",
        position: "relative",
      }}
    >
      <div id="fruit-cup" style={{ position: "absolute", top: "-60px" }} />

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "42px" }}>
          <span className="eyebrow" style={{ marginBottom: "12px" }}>
            <Sparkles size={14} />
            Our Specialty
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "var(--espresso-dark, #2D1A10)",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            Ayan Signature Fresh Fruit Cup
          </h2>
          <p
            style={{
              color: "var(--text-secondary, #6E5343)",
              fontSize: "1.05rem",
              maxWidth: "54ch",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Carefully hand-cut seasonal fruits prepared upon order for peak sweetness, freshness, and crisp nutrition.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            backgroundColor: "#FFF",
            borderRadius: "32px",
            overflow: "hidden",
            boxShadow: "0 18px 45px -12px rgba(68, 39, 24, 0.14)",
            border: "1.5px solid rgba(68, 39, 24, 0.08)",
            display: "grid",
            gridTemplateColumns: "1fr",
          }}
          className="fruit-showcase-card"
        >
          {/* Visual Column */}
          <div
            style={{
              position: "relative",
              minHeight: "340px",
              backgroundColor: "#FAF4EE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <img
              src={fruitCup.image}
              alt={fruitCup.name}
              style={{
                width: "100%",
                maxHeight: "380px",
                objectFit: "contain",
                borderRadius: "20px",
                filter: "drop-shadow(0 12px 24px rgba(68, 39, 24, 0.15))",
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            {/* Price Tag Overlay */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                backgroundColor: "var(--espresso-dark, #2D1A10)",
                color: "var(--cream-light, #FBF5F0)",
                padding: "10px 18px",
                borderRadius: "999px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "0.78rem", opacity: 0.8, textTransform: "uppercase" }}>Only</span>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "var(--caramel-accent, #B4694E)",
                }}
              >
                Rs. 200
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div
            style={{
              padding: "40px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
              <span
                style={{
                  backgroundColor: "#E8F8EE",
                  color: "#1E7E34",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  padding: "5px 12px",
                  borderRadius: "999px",
                }}
              >
                ✨ Ready to Order
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                }}
              >
                <Clock size={14} color="var(--caramel-accent)" />
                {fruitCup.prepTime}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                }}
              >
                <Flame size={14} color="var(--brown-mocha)" />
                {fruitCup.calories}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.75rem",
                color: "var(--espresso-dark, #2D1A10)",
                fontWeight: 700,
                lineHeight: 1.25,
              }}
            >
              {fruitCup.name}
            </h3>

            <p style={{ color: "var(--text-secondary, #6E5343)", fontSize: "0.98rem", lineHeight: 1.7 }}>
              {fruitCup.desc}
            </p>

            {/* Ingredients Tags */}
            <div>
              <span
                style={{
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Handpicked Ingredients:
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {ingredients.map((ing) => (
                  <span
                    key={ing.name}
                    style={{
                      backgroundColor: "var(--cream-light, #FBF5F0)",
                      border: "1px solid rgba(74, 46, 28, 0.1)",
                      color: "var(--espresso-dark)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      padding: "5px 12px",
                      borderRadius: "999px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <span>{ing.emoji}</span>
                    <span>{ing.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "18px",
                borderTop: "1px solid var(--border-light)",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              <div>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "block" }}>
                  Serving Size
                </span>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--espresso-dark)" }}>
                  1 Generous Cup (Rs. 200)
                </span>
              </div>

              <button
                type="button"
                onClick={handleOrderClick}
                className="btn btn-primary"
                style={{ padding: "14px 28px", fontSize: "0.95rem" }}
              >
                <span>Order Now (Rs. 200)</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Subtle Coming Soon Teaser */}
        <div
          style={{
            maxWidth: "680px",
            margin: "34px auto 0",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "20px",
            padding: "16px 24px",
            border: "1px dashed rgba(74, 46, 28, 0.16)",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            fontSize: "0.88rem",
            color: "var(--brown-mocha)",
          }}
        >
          <span>⏳</span>
          <span>
            <strong>Coming Soon:</strong> Belgian Chocolate Milk Bottles, Badam Pista Milk & Artisan Bakes are currently in preparation!
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .fruit-showcase-card {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
      `}</style>
    </section>
  );
}
