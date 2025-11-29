import React from "react";

export default function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} style={{ margin: '50px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ 
          color: '#2c3e50', 
          fontSize: '2.2rem',
          marginBottom: '10px',
          position: 'relative',
          display: 'inline-block'
        }}>
          {title}
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '2px'
          }}></div>
        </h2>
        {subtitle && (
          <p style={{ 
            color: '#7f8c8d', 
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '20px auto 0',
            lineHeight: '1.5'
          }}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}