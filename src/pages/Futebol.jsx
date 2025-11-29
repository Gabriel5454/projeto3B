import React from "react";
import Card from "../components/Card/Card";

export default function Futebol() {
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>⚽ Futebol</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="Pelé"
          color="#27ae60"
          img="/images/pele.jpg"
          content={`O maior da história enfrentou racismo mesmo no auge, mas se tornou símbolo mundial de excelência e orgulho negro.`}
        />

        <Card
          title="Leônidas da Silva"
          color="#2ecc71"
          img="/images/leonidas.png"
          content={`O 'Diamante Negro' brilhou no início do século XX e abriu portas para atletas negros no futebol brasileiro.`}
        />

        <Card
          title="Vinícius Júnior"
          color="#27ae60"
          img="/images/vini.png"
          content={`Se tornou símbolo mundial no combate ao racismo após ser alvo constante de ataques na Espanha.`}
        />

        <Card
          title="Daniel Alves"
          color="#2ecc71"
          img="/images/daniel.jpg"
          content={`Reagiu com coragem a um ato racista e virou exemplo global na luta antirracista.`}
        />
      </div>
    </div>
  );
}
