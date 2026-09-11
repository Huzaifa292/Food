import React, { useState } from "react";
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, MapPin, Coffee, Check } from "lucide-react";
import { CAFE_INFO, CUSTOMIZATION_OPTIONS } from "../data/menuData";

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [deliveryType, setDeliveryType] = useState("delivery"); // 'delivery' or 'pickup'
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerNote, setCustomerNote] = useState("");

  if (!isOpen) return null;

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = deliveryType === "delivery" ? (subtotal >= 1500 || subtotal === 0 ? 0 : 150) : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    if (!customerName.trim()) {
      alert("Please enter your name before placing the order.");
      return;
    }

    // Format WhatsApp Message
    let text = `*New Order - ${CAFE_INFO.name}*\n`;
    text += `--------------------------------\n`;
    text += `*Customer:* ${customerName}\n`;
    text += `*Order Type:* ${deliveryType === "delivery" ? "Doorstep Delivery" : "Dine-in / Pickup"}\n`;
    if (deliveryType === "delivery" && customerAddress) {
      text += `*Address:* ${customerAddress}\n`;
    }
    if (customerNote) {
      text += `*Special Note:* ${customerNote}\n`;
    }
    text += `--------------------------------\n`;
    text += `*Ordered Items:*\n`;

    cart.forEach((item, idx) => {
      text += `${idx + 1}. ${item.name} x ${item.quantity} = ${CAFE_INFO.currency} ${item.price * item.quantity}\n`;
      if (item.selectedAddons && item.selectedAddons.length > 0) {
        text += `   ↳ Addons: ${item.selectedAddons.join(", ")}\n`;
      }
    });

    text += `--------------------------------\n`;
    text += `*Subtotal:* ${CAFE_INFO.currency} ${subtotal}\n`;
    if (deliveryType === "delivery") {
      text += `*Delivery Fee:* ${deliveryFee === 0 ? "FREE" : `${CAFE_INFO.currency} ${deliveryFee}`}\n`;
    }
    text += `*Grand Total:* ${CAFE_INFO.currency} ${grandTotal}\n`;
    text += `--------------------------------\n`;
    text += `Please confirm my order and share estimated preparation time. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "rgba(40, 22, 12, 0.45)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "100%",
          backgroundColor: "var(--pure-white)",
          boxShadow: "-10px 0 30px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid var(--border-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "var(--cream-light)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "var(--brown-deep)",
                color: "var(--cream-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--espresso-dark)" }}>
                Your Order Bag
              </h3>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                {cart.length} {cart.length === 1 ? "item" : "items"} selected
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close cart drawer"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "var(--pure-white)",
              border: "1px solid var(--border-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--espresso-dark)",
              transition: "var(--transition)",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div
            style={{
              padding: "60px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "16px",
              flex: 1,
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                backgroundColor: "var(--cream-deep)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--brown-mocha)",
              }}
            >
              <Coffee size={36} />
            </div>
            <h4 style={{ fontSize: "1.25rem", color: "var(--espresso-dark)" }}>
              Your bag is currently empty
            </h4>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", maxWidth: "280px" }}>
              Explore our artisan coffee, golden butter croissants, and brunch delicacies to add items.
            </p>
            <button
              onClick={onClose}
              className="btn btn-primary"
              style={{ marginTop: "10px" }}
            >
              Browse Delicacies
            </button>
          </div>
        ) : (
          <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "22px", flex: 1 }}>
            {/* Delivery vs Pickup Switcher */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                backgroundColor: "var(--cream-deep)",
                padding: "4px",
                borderRadius: "var(--radius-pill)",
              }}
            >
              <button
                onClick={() => setDeliveryType("delivery")}
                style={{
                  padding: "8px 14px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  transition: "var(--transition)",
                  backgroundColor: deliveryType === "delivery" ? "var(--pure-white)" : "transparent",
                  color: deliveryType === "delivery" ? "var(--espresso-dark)" : "var(--text-muted)",
                  boxShadow: deliveryType === "delivery" ? "var(--shadow-sm)" : "none",
                }}
              >
                🛵 Doorstep Delivery
              </button>
              <button
                onClick={() => setDeliveryType("pickup")}
                style={{
                  padding: "8px 14px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  transition: "var(--transition)",
                  backgroundColor: deliveryType === "pickup" ? "var(--pure-white)" : "transparent",
                  color: deliveryType === "pickup" ? "var(--espresso-dark)" : "var(--text-muted)",
                  boxShadow: deliveryType === "pickup" ? "var(--shadow-sm)" : "none",
                }}
              >
                ☕ Dine-in / Pickup
              </button>
            </div>

            {/* Cart Items List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--cream-light)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h5
                      style={{
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        color: "var(--espresso-dark)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.name}
                    </h5>
                    <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--caramel-accent)" }}>
                      {CAFE_INFO.currency} {item.price} each
                    </p>
                  </div>

                  {/* Quantity Stepper */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      backgroundColor: "var(--pure-white)",
                      padding: "4px 8px",
                      borderRadius: "var(--radius-pill)",
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      style={{ color: "var(--espresso-dark)", padding: "2px" }}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, minWidth: "16px", textAlign: "center" }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      style={{ color: "var(--espresso-dark)", padding: "2px" }}
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    style={{ color: "var(--text-muted)", padding: "4px" }}
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Customer Information Form */}
            <div
              style={{
                backgroundColor: "var(--cream-light)",
                padding: "16px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--espresso-dark)" }}>
                Contact & Delivery Info
              </h4>

              <div>
                <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maria Khan"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-light)",
                    fontSize: "0.88rem",
                    backgroundColor: "var(--pure-white)",
                    color: "var(--espresso-dark)",
                  }}
                />
              </div>

              {deliveryType === "delivery" && (
                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    placeholder="House / Apartment #, Street, Area"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: "1px solid var(--border-light)",
                      fontSize: "0.88rem",
                      backgroundColor: "var(--pure-white)",
                      color: "var(--espresso-dark)",
                    }}
                  />
                </div>
              )}

              <div>
                <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>
                  Special Note / Instructions (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Less sugar, extra warm, oat milk"
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-light)",
                    fontSize: "0.88rem",
                    backgroundColor: "var(--pure-white)",
                    color: "var(--espresso-dark)",
                  }}
                />
              </div>
            </div>

            {/* Bill Summary */}
            <div
              style={{
                backgroundColor: "var(--cream-deep)",
                padding: "16px",
                borderRadius: "var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                <span>Items Subtotal</span>
                <span style={{ fontWeight: 700 }}>{CAFE_INFO.currency} {subtotal}</span>
              </div>

              {deliveryType === "delivery" && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                  <span>Delivery Fee</span>
                  <span style={{ fontWeight: 700, color: deliveryFee === 0 ? "#25D366" : "inherit" }}>
                    {deliveryFee === 0 ? "FREE" : `${CAFE_INFO.currency} ${deliveryFee}`}
                  </span>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "var(--espresso-dark)",
                  borderTop: "1px solid rgba(68,39,24,0.12)",
                  paddingTop: "8px",
                  marginTop: "4px",
                }}
              >
                <span>Total Amount</span>
                <span style={{ color: "var(--caramel-accent)", fontFamily: "'Playfair Display', serif" }}>
                  {CAFE_INFO.currency} {grandTotal}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "auto" }}>
              <button
                onClick={handleWhatsAppCheckout}
                className="btn btn-whatsapp"
                style={{ width: "100%", padding: "16px", fontSize: "1rem" }}
              >
                <MessageCircle size={20} />
                <span>Place Order via WhatsApp</span>
              </button>

              <button
                onClick={onClearCart}
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  padding: "6px",
                  textAlign: "center",
                }}
              >
                Clear Entire Bag
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
