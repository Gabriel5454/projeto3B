import React from "react";
import Card from "../components/Card/Card";

export default function Tenis() {
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>🎾 Tênis</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="Serena Williams"
          color="#8e44ad"
          img="/images/serena.jpg"
          content={`Maior tenista da história, enfrentou ataques racistas e misóginos durante toda a carreira, tornando-se símbolo global de resistência.`}
        />

        <Card
          title="Arthur Ashe"
          color="#9b59b6"
          img="/images/ashe.png"
          content={`Primeiro negro a vencer Wimbledon, tornou-se uma das vozes mais importantes contra o racismo no esporte.`}
        />
      </div>
    </div>
  );
}
