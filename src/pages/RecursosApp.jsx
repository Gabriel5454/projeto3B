import React from "react";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";

export default function RecursosApp() {
  return (
    <div className="fade-in">
      <Section 
        title="🛠️ Recursos e Apoio" 
        subtitle="Ferramentas, organizações e informações para você se engajar na luta antirracista"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          <Card 
            title="🏛️ Organizações" 
            color="#9b59b6"
            content="• Educafro - Educação e cidadania\n• Geledés - Instituto da Mulher Negra\n• Criola - Organização de mulheres negras\n• UNEGRO - União de Negros pela Igualdade\n• MNU - Movimento Negro Unificado\n• Coalizão Negra por Direitos" 
          />
          <Card 
            title="📞 Canais de Denúncia" 
            color="#e74c3c"
            content="• Disque 100 - Direitos Humanos\n• Disk 180 - Central de Atendimento à Mulher\n• Ouvidorias públicas estaduais e municipais\n• Aplicativo 'Direitos Humanos BR'\n• Delegacias especializadas em crimes raciais\n• Ministério Público Federal" 
          />
          <Card 
            title="📚 Para Estudar" 
            color="#27ae60"
            content="• Lei 10.639/03 - Ensino da história africana\n• Livro: 'Pequeno Manual Antirracista' - Djamila Ribeiro\n• Livro: 'Racismo Estrutural' - Silvio Almeida\n• Documentário: 'Olhos que Condenam'\n• Filme: 'Branco Sai, Preto Fica'\n• Série: 'Cidade Invisível'" 
          />
          <Card 
            title="💼 Apoio Jurídico" 
            color="#3498db"
            content="• Defensoria Pública da União\n• Núcleos de combate à discriminação em OABs estaduais\n• ONGs que oferecem assistência jurídica gratuita\n• Coletivos de advogados negros\n• Comissões de direitos humanos das universidades" 
          />
        </div>
      </Section>
    </div>
  );
}