import React from "react";

export default function Contato() {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "15px" }}>📞 Contato & Suporte</h2>
      <p style={{ lineHeight: "1.7", color: "#555", marginBottom: "20px" }}>
        Precisa de ajuda, deseja fazer um pedido ou denunciar algo? Fale conosco.
      </p>

      <div style={{
        background: "#f7f7f7",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
        <p style={{ marginBottom: "8px" }}>📧 E-mail:</p>
        <strong>me.salva.bico@gmail.com</strong>

        <p style={{ marginTop: "20px", marginBottom: "8px" }}>💬 Mensagem Rápida:</p>
        <textarea
          placeholder="Digite sua mensagem..."
          style={{
            width: "100%",
            height: "120px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            resize: "none"
          }}
        ></textarea>

        <button
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "#2ecc71",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
