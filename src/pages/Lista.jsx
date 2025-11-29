import React from "react";
import { Link } from "react-router-dom";

export default function Esportes() {
  const lista = [
    { nome: "Atletismo", emoji: "🏃", cor: "#e67e22", link: "/atletismo" },
    { nome: "Futebol", emoji: "⚽", cor: "#27ae60", link: "/futebol" },
    { nome: "Tênis", emoji: "🎾", cor: "#8e44ad", link: "/tenis" },
    { nome: "Ginástica", emoji: "🤸", cor: "#c0392b", link: "/ginastica" },
    { nome: "Lutas", emoji: "🥋", cor: "#2980b9", link: "/lutas" },
    { nome: "Basquete", emoji: "🏀", cor: "#f1c40f", link: "/basquete" },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "#2c3e50", marginBottom: "25px" }}>🏅 Esportes</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "20px",
        }}
      >
        {lista.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${item.cor}20 0%, ${item.cor}40 100%)`,
                border: `2px solid ${item.cor}30`,
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(0,0,0,0.1)";
              }}
            >
              <h3
                style={{
                  color: "#2c3e50",
                  marginTop: 0,
                  marginBottom: "15px",
                  fontSize: "1.3rem",
                  borderLeft: `4px solid ${item.cor}`,
                  paddingLeft: "12px",
                }}
              >
                {item.emoji} {item.nome}
              </h3>

              <p style={{ color: "#34495e", fontSize: "0.95rem" }}>
                Clique para ver os atletas, histórias e casos de racismo no{" "}
                <strong>{item.nome}</strong>.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
