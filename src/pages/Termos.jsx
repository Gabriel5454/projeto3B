import React from "react";

export default function Termos() {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "15px" }}>📝 Termos de Uso</h2>
      <p style={{ lineHeight: "1.7", color: "#555" }}>
        Ao utilizar este site, você concorda em respeitar nossos princípios de igualdade,
        respeito e combate ao racismo.
      </p>

      <h3 style={{ marginTop: "25px" }}>✔ Uso Adequado</h3>
      <p style={{ lineHeight: "1.7" }}>
        O conteúdo é destinado para fins educativos e de conscientização.
      </p>

      <h3 style={{ marginTop: "25px" }}>🚫 Proibições</h3>
      <p style={{ lineHeight: "1.7" }}>
        É proibido publicar qualquer conteúdo discriminatório, ofensivo ou violento.
      </p>
    </div>
  );
}
