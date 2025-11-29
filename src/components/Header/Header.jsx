import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#2c3e50",
      padding: "15px 30px",
      borderRadius: "15px",
      margin: "20px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
    }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <div style={{ 
          width: "45px", 
          height: "45px", 
          backgroundColor: "#e74c3c", 
          borderRadius: "50%",
          marginRight: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>
          ✊
        </div>
        <h1 style={{ color: "#ecf0f1", margin: 0, fontSize: "1.5rem" }}>Consciência Negra</h1>
      </Link>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Link to="/" style={isActive("/") ? activeLinkStyle : linkStyle}>
          🏠 Home
        </Link>
        <Link to="/formas" style={isActive("/formas") ? activeLinkStyle : linkStyle}>
          📖 Formas
        </Link>
        <Link to="/combate" style={isActive("/combate") ? activeLinkStyle : linkStyle}>
          ⚔️ Combate
        </Link>
        <Link to="/recursos" style={isActive("/recursos") ? activeLinkStyle : linkStyle}>
          🛠️ Recursos
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#bdc3c7",
  margin: "0 8px",
  textDecoration: "none",
  padding: "10px 15px",
  borderRadius: "20px",
  transition: "all 0.3s ease",
  fontWeight: "500"
};

const activeLinkStyle = {
  ...linkStyle,
  color: "#ffffff",
  backgroundColor: "#e74c3c",
  fontWeight: "bold"
};