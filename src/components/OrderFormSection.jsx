import React, { useState, useMemo } from "react";
import { MessageCircle, MapPin, Plus, Minus } from "lucide-react";
import { CAFE_INFO } from "../data/menuData";

const TOPPINGS = [
  { id: "honey", label: "🍯 Organic Honey Glaze", price: 0 },
  { id: "dryfruits", label: "🥜 Crushed Almonds & Pistachio", price: 50 },
  { id: "chocodrizzle", label: "🍫 Belgian Cocoa Drizzle", price: 50 },
];

export default function OrderFormSection({ orderQuantities, onUpdateQuantity }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [locationStatus, setLocationStatus] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  const [selectedToppings, setSelectedToppings] = useState([]);

  // Fruit cup quantity - guaranteed minimum of 1
  const fruitCupQty = Math.max(1, orderQuantities?.[1] ?? 1);
  const fruitCupPrice = 200;

  const itemsTotal = fruitCupQty * fruitCupPrice;

  // Recalculate toppings total efficiently
  const toppingsTotal = useMemo(() => {
    return selectedToppings.reduce((sum, tId) => {
      const t = TOPPINGS.find((item) => item.id === tId);
      return sum + (t ? t.price * fruitCupQty : 0);
    }, 0);
  }, [selectedToppings, fruitCupQty]);

  const grandTotal = itemsTotal + toppingsTotal;

  const handleQtyChange = (newVal) => {
    const safeVal = Math.max(1, Math.min(99, newVal));
    if (onUpdateQuantity) {
      onUpdateQuantity(1, safeVal);
    }
  };

  const handleToppingToggle = (id) => {
    setSelectedToppings((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("Location is not supported on this browser.");
      return;
    }

    setIsLocating(true);
    setLocationStatus("Detecting your location…");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 7000);

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            { signal: controller.signal }
          );
          clearTimeout(timeoutId);

          if (res.ok) {
            const data = await res.json();
            const addr = data.address || {};
            const parts = [
              addr.road || addr.suburb || addr.neighbourhood,
              addr.city || addr.town || "Karachi",
            ].filter(Boolean);
            const shortAddr = parts.length > 0 ? parts.join(", ") : data.display_name;
            setAddress(shortAddr || `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
            setLocationStatus("Location detected! Add house/street details.");
          } else {
            setAddress(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
            setLocationStatus("Coordinates set — please add street details.");
          }
        } catch {
          setAddress(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
          setLocationStatus("Coordinates set — please add street details.");
        } finally {
          setIsLocating(false);
        }
      },
      (err) => {
        setIsLocating(false);
        if (err.code === 1) {
          setLocationStatus("Location permission denied — please type address.");
        } else {
          setLocationStatus("Could not get location — please type address.");
        }
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedAddress = address.trim();

    if (!trimmedName) {
      alert("Please enter your name.");
      return;
    }

    const cleanPhoneDigits = trimmedPhone.replace(/\D/g, "");
    if (cleanPhoneDigits.length < 10) {
      alert("Please enter a valid WhatsApp phone number (e.g. 03XX-XXXXXXX).");
      return;
    }

    if (!trimmedAddress) {
      alert("Please enter your delivery address in Karachi.");
      return;
    }

    // Format clean, professional WhatsApp Message
    let message = `*New Order - ${CAFE_INFO.name}*\n\n`;
    message += `👤 *Customer:* ${trimmedName}\n`;
    message += `📞 *WhatsApp:* ${trimmedPhone}\n`;
    message += `📍 *Delivery Address:* ${trimmedAddress}\n\n`;
    message += `🛒 *Ordered Item:*\n`;
    message += `🍓 *Fresh Fruit Cup* × ${fruitCupQty} = Rs. ${(fruitCupPrice * fruitCupQty).toLocaleString("en-PK")}\n`;

    if (selectedToppings.length > 0) {
      const names = selectedToppings.map((tId) => {
        const t = TOPPINGS.find((item) => item.id === tId);
        return t ? t.label : tId;
      });
      message += `✨ *Add-ons:* ${names.join(", ")}\n`;
    }

    message += `\n💰 *Total Payable: Rs. ${grandTotal.toLocaleString("en-PK")}*\n`;
    message += `🚚 *Payment Method:* Cash on Delivery (COD)\n\n`;
    message += `_Sent via ${CAFE_INFO.name} Web Ordering_`;

    const whatsappUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "14px",
    border: "1.5px solid rgba(74, 46, 28, 0.15)",
    backgroundColor: "#FFF",
    fontSize: "0.92rem",
    color: "var(--espresso-dark)",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s ease",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.86rem",
    fontWeight: 700,
    color: "var(--espresso-dark)",
    marginBottom: "6px",
  };

  return (
    <section
      id="order"
      style={{
        padding: "70px 0 90px",
        backgroundColor: "var(--pure-white, #FFFDFB)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span className="eyebrow" style={{ marginBottom: "12px" }}>
            Easy Ordering
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "var(--espresso-dark, #2D1A10)",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Order Your Fresh Fruit Cup
          </h2>
          <p
            style={{
              fontSize: "1rem",
              maxWidth: "46ch",
              margin: "0 auto",
            }}
          >
            Select your quantity, enter your details, and tap send to confirm your order over WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="form-wrap"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "var(--cream-light, #FBF5F0)",
            borderRadius: "28px",
            padding: "36px 28px",
            boxShadow: "0 14px 40px -12px rgba(68, 39, 24, 0.14)",
            border: "1px solid rgba(68, 39, 24, 0.08)",
          }}
        >
          {/* Item Selector Box */}
          <div
            style={{
              backgroundColor: "#FFF",
              borderRadius: "20px",
              padding: "16px 20px",
              border: "1.5px solid var(--caramel-accent, #B4694E)",
              marginBottom: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "14px",
              boxShadow: "0 4px 14px -6px rgba(180, 105, 78, 0.25)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/images/fruit.jpeg"
                alt="Fruit Cup"
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  objectFit: "cover",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              />
              <div>
                <h4
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 700,
                    color: "var(--espresso-dark)",
                    margin: 0,
                  }}
                >
                  Fresh Fruit Cup
                </h4>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--caramel-accent)",
                    marginTop: "2px",
                  }}
                >
                  Rs. 200 each
                </div>
              </div>
            </div>

            {/* Stepper */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "var(--cream-light)",
                borderRadius: "999px",
                padding: "4px 8px",
                border: "1px solid var(--border-light)",
              }}
            >
              <button
                type="button"
                onClick={() => handleQtyChange(fruitCupQty - 1)}
                disabled={fruitCupQty <= 1}
                aria-label="Decrease quantity"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "#FFF",
                  color: "var(--espresso-dark)",
                  cursor: fruitCupQty <= 1 ? "not-allowed" : "pointer",
                  opacity: fruitCupQty <= 1 ? 0.35 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  transition: "all 0.2s ease",
                }}
              >
                <Minus size={15} />
              </button>

              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "var(--espresso-dark)",
                  minWidth: "28px",
                  textAlign: "center",
                  userSelect: "none",
                }}
              >
                {fruitCupQty}
              </span>

              <button
                type="button"
                onClick={() => handleQtyChange(fruitCupQty + 1)}
                aria-label="Increase quantity"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "var(--espresso-dark)",
                  color: "#FFF",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(45, 26, 16, 0.25)",
                  transition: "all 0.2s ease",
                }}
              >
                <Plus size={15} />
              </button>
            </div>
          </div>

          {/* Optional Toppings Choices */}
          <div style={{ marginBottom: "22px" }}>
            <label style={labelStyle}>
              Optional Add-ons
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {TOPPINGS.map((t) => {
                const isChecked = selectedToppings.includes(t.id);
                return (
                  <label
                    key={t.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: isChecked ? "#FAF0E6" : "#FFF",
                      border: isChecked
                        ? "1.5px solid var(--caramel-accent)"
                        : "1px solid rgba(74, 46, 28, 0.12)",
                      borderRadius: "12px",
                      padding: "10px 14px",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--espresso-dark)",
                      transition: "all 0.2s ease",
                      userSelect: "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleToppingToggle(t.id)}
                        style={{
                          width: "16px",
                          height: "16px",
                          accentColor: "var(--caramel-accent)",
                          cursor: "pointer",
                        }}
                      />
                      <span>{t.label}</span>
                    </div>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--caramel-accent)" }}>
                      {t.price === 0 ? "FREE" : `+Rs. ${t.price * fruitCupQty}`}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Field: Name */}
          <div style={{ marginBottom: "18px" }}>
            <label htmlFor="customer_name" style={labelStyle}>
              Your Name *
            </label>
            <input
              id="customer_name"
              type="text"
              required
              placeholder="e.g. Ali Khan"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Field: Phone */}
          <div style={{ marginBottom: "18px" }}>
            <label htmlFor="customer_phone" style={labelStyle}>
              WhatsApp Phone Number *
            </label>
            <input
              id="customer_phone"
              type="tel"
              required
              placeholder="03XX-XXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Field: Delivery Address */}
          <div style={{ marginBottom: "22px" }}>
            <label htmlFor="customer_address" style={labelStyle}>
              Delivery Address in Karachi *
            </label>
            <textarea
              id="customer_address"
              rows={2}
              required
              placeholder="House # / Street / Area, Karachi"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={handleUseMyLocation}
                disabled={isLocating}
                style={{
                  backgroundColor: "var(--cream-deep)",
                  color: "var(--espresso-dark)",
                  border: "none",
                  padding: "7px 15px",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: isLocating ? "not-allowed" : "pointer",
                  opacity: isLocating ? 0.6 : 1,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                }}
              >
                <MapPin size={13} />
                <span>{isLocating ? "Locating…" : "📍 Detect Location"}</span>
              </button>
              {locationStatus && (
                <span style={{ fontSize: "0.8rem", color: "var(--caramel-accent)", fontWeight: 600 }}>
                  {locationStatus}
                </span>
              )}
            </div>
          </div>

          {/* Bill Summary */}
          <div
            style={{
              backgroundColor: "#FFF",
              borderRadius: "16px",
              padding: "16px 20px",
              border: "1.5px solid rgba(74, 46, 28, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <div>
              <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                {fruitCupQty} {fruitCupQty === 1 ? "Fruit Cup" : "Fruit Cups"}
              </span>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "var(--espresso-dark)",
                }}
              >
                Total: Rs. {grandTotal.toLocaleString("en-PK")}
              </div>
            </div>

            <span
              style={{
                fontSize: "0.78rem",
                color: "var(--caramel-accent)",
                fontWeight: 700,
                backgroundColor: "var(--cream-light)",
                padding: "6px 12px",
                borderRadius: "999px",
              }}
            >
              Cash on Delivery
            </span>
          </div>

          {/* WhatsApp Order Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: "var(--espresso-dark, #2D1A10)",
              color: "var(--cream-light, #FBF5F0)",
              fontWeight: 700,
              fontSize: "1.05rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              transition: "all 0.25s ease",
              boxShadow: "0 10px 24px -8px rgba(45, 26, 16, 0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--caramel-accent, #B4694E)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--espresso-dark, #2D1A10)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <MessageCircle size={20} />
            <span>Send Order via WhatsApp</span>
          </button>

          <p
            style={{
              textAlign: "center",
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
              marginTop: "12px",
              marginBottom: 0,
            }}
          >
            Tapping opens WhatsApp with your order ready to send instantly.
          </p>
        </form>
      </div>
    </section>
  );
}
