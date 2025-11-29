import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#2c3e50",
      color: "#ecf0f1",
      padding: "40px 20px",
      marginTop: "40px",
      borderRadius: "15px 15px 0 0"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        justifyContent: "space-between"
      }}>
        <div style={{ flex: "1 1 300px" }}>
          <h5 style={{ 
            display: "flex", 
            alignItems: "center", 
            marginBottom: "15px",
            fontSize: "1.2rem"
          }}>
            <img src={logo} alt="Consciência Negra" height="35" style={{ marginRight: "12px" }} />
            ✨ Consciência Negra
          </h5>
          <p style={{ color: "#bdc3c7", lineHeight: "1.6", marginBottom: "10px" }}>
            Conectando conhecimento e consciência para construir um futuro mais justo e igualitário.
          </p>
          <a href="mailto:me.salva.bico@gmail.com" style={{ 
            color: "#3498db", 
            textDecoration: "none",
            fontWeight: "500"
          }}>
            📧 me.salva.bico@gmail.com
          </a>
        </div>

        <div style={{ flex: "1 1 150px" }}>
          <h6 style={{ 
            textTransform: "uppercase", 
            marginBottom: "15px",
            color: "#ecf0f1",
            fontSize: "1rem"
          }}>🚀 Navegação</h6>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { to: "/", label: "🏠 Home" },
              { to: "/formas", label: "📖 Formas" },
              { to: "/combate", label: "⚔️ Combate" },
              { to: "/recursos", label: "🛠️ Recursos" }
            ].map((item, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Link to={item.to} style={footerLinkStyle}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: "1 1 150px" }}>
          <h6 style={{ 
            textTransform: "uppercase", 
            marginBottom: "15px",
            color: "#ecf0f1",
            fontSize: "1rem"
          }}>📋 Legal</h6>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { to: "/politica", label: "🔒 Política de Privacidade" },
              { to: "/termos", label: "📝 Termos de Uso" },
              { to: "/contato", label: "📞 Contato & Suporte" }
            ].map((item, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Link to={item.to} style={footerLinkStyle}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr style={{ 
        margin: "30px 0", 
        border: "none", 
        borderTop: "1px solid rgba(255,255,255,0.1)" 
      }} />

      <p style={{ 
        textAlign: "center", 
        color: "#bdc3c7", 
        fontSize: "0.9rem",
        margin: 0
      }}>
        &copy; {new Date().getFullYear()} Consciência Negra - 
        Desenvolvido com 💚 e profissionalismo
      </p>
    </footer>
  );
}

const footerLinkStyle = {
  color: "#bdc3c7",
  textDecoration: "none",
  display: "block",
  marginBottom: "5px",
  transition: "color 0.3s ease"
};