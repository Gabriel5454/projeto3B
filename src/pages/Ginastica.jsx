import React from "react";
import Card from "../components/Card/Card";

export default function Ginastica() {
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>🤸 Ginástica</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="Daiane dos Santos"
          color="#c0392b"
          img="/images/dailane.jpg"
          content={`Primeira campeã mundial brasileira, enfrentou racismo e falta de apoio, tornando-se referência mundial.`}
        />

        <Card
          title="Simone Biles"
          color="#e74c3c"
          img="/images/bies.jpeg"
          content={`A maior ginasta da história enfrentou racismo e desafios emocionais, mas revolucionou o esporte.`}
        />
      </div>
    </div>
  );
}
