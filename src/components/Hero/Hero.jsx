import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [mostrarDenuncia, setMostrarDenuncia] = React.useState(false);

  function toggleDenuncia() {
    setMostrarDenuncia(!mostrarDenuncia);
  }

  return (
    <section style={{
      background: 'linear-gradient(135deg, #000000 0%, #434343 100%)',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
      borderRadius: '15px',
      margin: '20px 0 40px 0',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 100%)'
      }}></div>
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '20px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          ✊🏿 Contra o Racismo, Pela Igualdade
        </h1>

        <p style={{ 
          fontSize: '1.3rem', 
          maxWidth: '800px', 
          margin: '0 auto 30px',
          lineHeight: '1.6',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          O racismo é uma violação dos direitos humanos que precisa ser combatida 
          todos os dias. Educação, conscientização e ação são nossas armas mais poderosas 
          na construção de uma sociedade verdadeiramente igualitária.
        </p>

        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link
            to="/aprender_mais"
            style={{
              backgroundColor: "#2ecc71",
              padding: "12px 25px",
              color: "white",
              borderRadius: "25px",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}
          >
            🎓 Aprender Mais
          </Link>

          <button 
            style={{ ...buttonStyle, background: '#e74c3c' }}
            onClick={toggleDenuncia}
          >
            📢 Denunciar
          </button>
        </div>

        {mostrarDenuncia && (
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              marginTop: "25px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              color: "#333",
              boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
              animation: "fadeIn 0.2s ease-in-out"
            }}
          >
            <h3 style={{ marginBottom: "12px", fontWeight: "700", fontSize: "1.3rem" }}>
              Denunciar Caso de Racismo
            </h3>

            <textarea
              placeholder="Descreva o ocorrido com detalhes..."
              style={{
                width: "100%",
                height: "120px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "15px",
                marginBottom: "12px",
                resize: "none"
              }}
            />

            <button
              style={{
                background: "#e74c3c",
                border: "none",
                padding: "12px 22px",
                color: "white",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Enviar denúncia
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const buttonStyle = {
  background: '#27ae60',
  color: 'white',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '25px',
  fontSize: '1rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
};
