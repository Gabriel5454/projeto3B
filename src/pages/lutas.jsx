import React from "react";
import Card from "../components/Card/Card";

export default function Lutas() {
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>🥋 Lutas</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="Anderson Silva"
          color="#2980b9"
          img="/images/anderson.jpg"
          content={`Um dos maiores lutadores da história, sofreu ataques racistas mesmo após dominar o UFC por anos.`}
        />

        <Card
          title="Muhammad Ali"
          color="#3498db"
          img="/images/muhammed.png"
          content={`Considerado o maior boxeador da história, ativista pelos direitos civis, preso injustamente por se recusar a ir à guerra, e símbolo mundial da luta contra o racismo.`}
        />
      </div>
    </div>
  );
}
