'use client';

import Section from './ui/Section';

const experiences = [
  {
    role: "Ingénieur DATA/IA",
    company: "Etech Consulting",
    period: "Depuis 2024",
    description: "Architecture et mise en production de pipelines Data/ML de bout en bout, combinant OCR, LLM et Computer Vision pour l'automatisation de l'extraction documentaire et de la détection d'anomalies.Développement de systèmes RAG fiabilisés par la technique CoVe et de modèles de classification (ResNet) déployés en MVP, avec une évaluation rigoureuse par *ground truth*."
  },
  {
    role: "Data Scientist / ML Engineer",
    company: "Relia Consulting",
    period: "2023 - 2024",
    description: "Conception et déploiement de pipelines Data/ML de bout en bout, incluant l'hybridation OCR/LLM avec protocole d'évaluation par *ground truth* et systèmes RAG fiabilisés. Développement de modèles de Computer Vision (ResNet) et de prédiction de stocks avec suivi expérimental sous *Weights & Biases* pour garantir la robustesse des solutions en production."
  },
  {
    role: "Développeur freelance",
    company: "RKWT OCEAN LTD",
    period: "2021 - 2023",
    description: "Conception et déploiement d’applications web et PWA, incluant le pilotage d'une architecture PostgreSQL stratégique pour le Ministère de l’Agriculture à Madagascar.Développement de modules applicatifs critiques pour la CNAPS, assurant l'interopérabilité des systèmes et la mise en œuvre de fonctionnalités d’aide sociale aux prestations d'accouchement."
  }
];

export default function Experience() {
  return (
    <Section id="experience" className="py-32">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="border-l-2 border-white/10 pl-8 relative py-2 hover:border-white/30 transition-colors"
          >
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black border-2 border-white/10" />
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <span className="text-gray-500 font-mono text-sm">{exp.period}</span>
            </div>
            <div className="text-lg text-gray-300 mb-4">{exp.company}</div>
            <p className="text-gray-400 max-w-3xl leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
