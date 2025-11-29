import React from "react";

export default function Card({ title, content, color = "#3498db", img }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
        border: `2px solid ${color}30`,
        padding: "25px",
        borderRadius: "15px",
        margin: "10px 0",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        height: "100%",
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
      {/* IMAGEM (apenas 1) */}
      {img && (
        <div
          style={{
            width: "100%",
            height: "140px",
            borderRadius: "12px",
            marginBottom: "15px",
            backgroundImage: `url(${img})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      )}

      <h3
        style={{
          color: "#2c3e50",
          marginTop: 0,
          marginBottom: "15px",
          fontSize: "1.3rem",
          borderLeft: `4px solid ${color}`,
          paddingLeft: "12px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#34495e",
          lineHeight: "1.6",
          fontSize: "1rem",
        }}
      >
        {content}
      </p>
    </div>
  );
}
