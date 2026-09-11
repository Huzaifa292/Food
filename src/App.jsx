import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import OrderFormSection from "./components/OrderFormSection";
import LocationHours from "./components/LocationHours";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  const [orderQuantities, setOrderQuantities] = useState({ 1: 1 });

  // When clicking 'Order Now' on the Fruit Cup showcase
  const handleSelectItem = (item) => {
    setOrderQuantities((prev) => ({
      ...prev,
      [item.id]: Math.max(1, (prev[item.id] || 0) + 1),
    }));
  };

  // Stepper in OrderFormSection
  const handleUpdateQuantity = (itemId, newQty) => {
    setOrderQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(1, newQty),
    }));
  };

  const fruitCupQty = orderQuantities[1] || 1;
  const totalOrderAmount = fruitCupQty * 200;

  return (
    <div className="ayan-cafe-app" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Sticky Header */}
      <Navbar />

      <main>
        {/* Clean Hero Section focused on Fresh Fruit Cup */}
        <Hero />

        {/* Spotlight on Ayan Signature Fresh Fruit Cup */}
        <MenuSection onAddToCart={handleSelectItem} />

        {/* Clean, Frictionless WhatsApp Order Form */}
        <OrderFormSection
          orderQuantities={orderQuantities}
          onUpdateQuantity={handleUpdateQuantity}
        />

        {/* Timings, Address & Google Map */}
        <LocationHours />
      </main>

      {/* Clean Minimal Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingButtons
        cartCount={fruitCupQty}
        cartTotal={totalOrderAmount}
      />
    </div>
  );
}
