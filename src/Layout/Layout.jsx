import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <Header />
      <main style={{ 
        flex: 1, 
        padding: '20px 0',
        background: 'rgba(255, 255, 255, 0.95)',
        margin: '20px',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}