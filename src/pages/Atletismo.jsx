import React from "react";
import Card from "../components/Card/Card";

export default function Atletismo() {
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>🏃 Atletismo</h2>

      {/* GRID PARA DEIXAR 2 CARDS POR LINHA */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="Jesse Owens"
          color="#e67e22"
          img="/images/jesse.png"
          content={`Jesse Owens brilhou nas Olimpíadas de 1936 com 4 ouros, desafiando a ideologia nazista e se tornando símbolo histórico contra o racismo.`}
        />

        <Card
          title="Eliud Kipchoge"
          color="#d35400"
          img="/images/Eilud.png"
          content={`Kipchoge é o maior maratonista da história e o primeiro a correr uma maratona abaixo de 2 horas. Um ícone africano de excelência.`}
        />

        <Card
          title="Rosângela Santos"
          color="#e67e22"
          img="/images/rosangela.png"
          content={`Velocista brasileira medalhista olímpica, enfrentou racismo e falta de apoio, tornando-se inspiração nacional.`}
        />

        <Card
          title="João do Pulo"
          color="#d35400"
          img="/images/joao.jpg"
          content={`Recordista mundial no salto triplo, enfrentou racismo e falta de reconhecimento, mas marcou a história do esporte brasileiro.`}
        />
      </div>
    </div>
  );
}
