import React from "react";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";

export default function FormasApp() {
  return (
    <div className="fade-in">
      <Section 
        title="📖 Formas de Racismo" 
        subtitle="Compreender as diferentes manifestações do racismo é o primeiro passo para combatê-lo"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          <Card 
            title="🏛️ Racismo Estrutural" 
            color="#9b59b6"
            content="Manifesta-se em práticas institucionais, culturais e históricas que perpetuam a desigualdade racial, mesmo sem intenção discriminatória explícita. Está presente no sistema educacional, de saúde, judiciário e mercado de trabalho." 
          />
          <Card 
            title="🏢 Racismo Institucional" 
            color="#f39c12"
            content="Ocorre dentro de instituições e organizações quando suas políticas, procedimentos e práticas sistematicamente produzem desvantagens para alguns grupos raciais. Exemplos: bancos, escolas, empresas e órgãos públicos." 
          />
          <Card 
            title="👥 Racismo Interpessoal" 
            color="#e74c3c"
            content="Manifestações individuais de preconceito e discriminação entre pessoas, incluindo insultos, violência, piadas ofensivas, tratamento diferenciado e exclusão social baseada na cor da pele." 
          />
          <Card 
            title="🎭 Racismo Velado" 
            color="#34495e"
            content="Formas sutis e disfarçadas de discriminação, como microagressões, estereótipos implícitos e situações onde o racismo é negado ou minimizado, mas seus efeitos são reais e danosos." 
          />
        </div>
      </Section>
    </div>
  );
}