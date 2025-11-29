import React from "react";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";

export default function CombateApp() {
  return (
    <div className="fade-in">
      <Section 
        title="⚔️ Como Combater o Racismo" 
        subtitle="Ações concretas que cada um de nós pode tomar para construir uma sociedade mais justa"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          <Card 
            title="🎓 Educação Antirracista" 
            color="#27ae60"
            content="Busque conhecimento sobre história africana e afro-brasileira, entenda os processos históricos que levaram ao racismo estrutural. Leia autores negros, assista documentários e participe de cursos sobre o tema." 
          />
          <Card 
            title="🧠 Autocrítica Constante" 
            color="#f39c12"
            content="Reconheça e questione seus próprios preconceitos e vieses inconscientes. Todos temos responsabilidade na luta antirracista. Reflita sobre seus privilégios e como você pode usá-los para promover igualdade." 
          />
          <Card 
            title="📢 Ação e Denúncia" 
            color="#e74c3c"
            content="Denuncie situações de racismo, apoie políticas de inclusão e diversidade, e amplifique vozes racializadas. Use as redes sociais para conscientizar e mobilize sua comunidade para ações concretas." 
          />
          <Card 
            title="🤝 Apoio e Solidariedade" 
            color="#3498db"
            content="Apoie negócios de empreendedores negros, consuma conteúdo produzido por pessoas negras, participe de coletivos e organizações antirracistas. A solidariedade é fundamental na luta por direitos iguais." 
          />
        </div>
      </Section>
    </div>
  );
}