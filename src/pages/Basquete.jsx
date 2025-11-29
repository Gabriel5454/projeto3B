import React from "react";
import Card from "../components/Card/Card";

export default function Basquete() {
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>🏀 Basquete</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="Michael Jordan"
          color="#f1c40f"
          img="/images/michael.jpg"
          content={`O maior de todos os tempos, enfrentou racismo desde jovem e abriu caminho para gerações de atletas negros.`}
        />

        <Card
          title="LeBron James"
          color="#f39c12"
          img="/images/lebron.jpg"
          content={`Além de lenda viva, é um dos maiores ativistas antirracistas no esporte mundial.`}
        />
      </div>
    </div>
  );
}
