import React from "react";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <div className="fade-in">
      <Hero />
      
      <Section id="sobre" title="📚 O que é Racismo?">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <Card 
            title="🎯 Definição" 
            color="#e3f2fd"
            content="Racismo é a discriminação social baseada no conceito de que existem diferentes raças humanas e que uma é superior às outras. É uma ideologia que nega a igualdade fundamental entre todos os seres humanos."
          />
          <Card 
            title="💔 Impactos" 
            color="#fce4ec"
            content="O racismo causa danos psicológicos profundos, limita oportunidades educacionais e profissionais, perpetua desigualdades sociais e viola direitos humanos fundamentais."
          />
          <Card 
            title="🇧🇷 No Brasil" 
            color="#e8f5e8"
            content="O racismo estrutural no Brasil tem raízes na escravidão e se manifesta em desigualdades econômicas, educacionais e no acesso à justiça, afetando principalmente a população negra."
          />
        </div>
      </Section>

      <Section id="estatisticas" title="📊 Dados Alarmantes">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          <Card 
            title="56% da população" 
            color="#ffeb3b"
            content="Negros e pardos representam a maioria da população brasileira"
          />
          <Card 
            title="2.6x mais chances" 
            color="#ff9800"
            content="Jovens negros têm maior probabilidade de serem vítimas de homicídio"
          />
          <Card 
            title="R$ 1.800" 
            color="#4caf50"
            content="Diferença salarial média entre brancos e negros com mesma formação"
          />
        </div>
      </Section>
    </div>
  );
}