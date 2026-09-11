import React, { useState } from "react";
import { X, Calendar, Clock, Users, Coffee, MessageCircle } from "lucide-react";
import { CAFE_INFO } from "../data/menuData";

export default function ReservationModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("11:00 AM");
  const [guests, setGuests] = useState("2 Guests");
  const [seating, setSeating] = useState("Indoor Cozy Sanctuary");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleReserve = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date) {
      alert("Please enter your name, phone number, and reservation date.");
      return;
    }

    let text = `*Table Reservation Request - ${CAFE_INFO.name}*\n`;
    text += `--------------------------------\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    text += `*Date:* ${date}\n`;
    text += `*Time:* ${time}\n`;
    text += `*Guests:* ${guests}\n`;
    text += `*Seating:* ${seating}\n`;
    if (notes) {
      text += `*Special Occasion / Notes:* ${notes}\n`;
    }
    text += `--------------------------------\n`;
    text += `Please let me know if this slot is available. Thank you!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1100,
        backgroundColor: "rgba(40, 22, 12, 0.55)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          backgroundColor: "var(--pure-white)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          overflow: "hidden",
          border: "1px solid var(--border-light)",
          animation: "floatSlow 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: "24px 28px",
            backgroundColor: "var(--brown-deep)",
            color: "var(--cream-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(232, 191, 176, 0.2)",
                color: "var(--latte-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Calendar size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--cream-light)" }}>
                Reserve a Table
              </h3>
              <p style={{ fontSize: "0.82rem", color: "var(--latte-soft)", marginTop: "2px" }}>
                Experience our cozy brown & white sanctuary
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              color: "var(--cream-light)",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleReserve} style={{ padding: "26px 28px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginBottom: "5px" }}>
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ayesha Khan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--cream-light)",
                  color: "var(--espresso-dark)",
                  fontSize: "0.9rem",
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginBottom: "5px" }}>
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="0344 2323824"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--cream-light)",
                  color: "var(--espresso-dark)",
                  fontSize: "0.9rem",
                }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginBottom: "5px" }}>
                Date *
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--cream-light)",
                  color: "var(--espresso-dark)",
                  fontSize: "0.9rem",
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginBottom: "5px" }}>
                Time Slot
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--cream-light)",
                  color: "var(--espresso-dark)",
                  fontSize: "0.9rem",
                }}
              >
                <option>9:00 AM (Morning Coffee)</option>
                <option>11:00 AM (Brunch Hour)</option>
                <option>2:00 PM (Afternoon Tea)</option>
                <option>5:00 PM (Sunset Brews)</option>
                <option>8:00 PM (Evening Dinner)</option>
                <option>10:00 PM (Late Night Chill)</option>
              </select>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginBottom: "5px" }}>
                Party Size
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--cream-light)",
                  color: "var(--espresso-dark)",
                  fontSize: "0.9rem",
                }}
              >
                <option>1 Person (Solo Work)</option>
                <option>2 Guests (Cozy Table)</option>
                <option>3 - 4 Guests</option>
                <option>5 - 6 Guests</option>
                <option>7+ Guests (Large Party)</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginBottom: "5px" }}>
                Preferred Seating
              </label>
              <select
                value={seating}
                onChange={(e) => setSeating(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--cream-light)",
                  color: "var(--espresso-dark)",
                  fontSize: "0.9rem",
                }}
              >
                <option>Indoor Cozy Sanctuary</option>
                <option>Sunlit Window Nook</option>
                <option>Quiet Work / Book Corner</option>
                <option>Barista Bar Stools</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginBottom: "5px" }}>
              Occasion or Special Requests
            </label>
            <input
              type="text"
              placeholder="e.g. Birthday celebration, anniversary, high-chair needed"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid var(--border-light)",
                backgroundColor: "var(--cream-light)",
                color: "var(--espresso-dark)",
                fontSize: "0.9rem",
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-whatsapp"
            style={{ width: "100%", padding: "14px", fontSize: "0.95rem", marginTop: "6px" }}
          >
            <MessageCircle size={18} />
            <span>Confirm Booking on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
