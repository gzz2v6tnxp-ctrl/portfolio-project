'use client';

import Section from './ui/Section';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "Agent RAG avec Monitoring",
    description: "Une interface de tableau de bord RAG-Agent moderne et optimisée pour les mobiles, développée avec React et Vite. Elle propose une surveillance des indicateurs en temps réel, une interface de chat animée et un état de santé du système.",
    tags: ["React", "Vite", "RAG", "CoVe", "QDrant", "Docker", "Tailwind CSS"],
    links: { demo: "#", repo: "#" },
    image: "/project-1.png" // Placeholder
  },
  {
    title: "Clinical Scribe (Healthcare Domain)",
    description: "Ajustez LLaMA 3 8B pour prendre des transcriptions médecin-patient désordonnées et non structurées et produire des notes cliniques structurées (format SOAP : Subjectif, Objectif, Évaluation, Plan) en utilisant une terminologie médicale spécifique.",
    tags: ["Python", "Airflow", "Kaggle", "PEF", "LoRA", "ROGUE-L", "transformers"],
    links: { demo: "#", repo: "#" },
    image: "/project-2.png" // Placeholder
  },
  {
    title: "Legal Contract Auditor (Legal/Finance)",
    description: "Un modèle qui prend une clause contractuelle en entrée et identifie les langages à haut risque ou les écarts par rapport aux clauses standard, en citant des principes juridiques spécifiques.",
    tags: ["Kaggle", "Python", "NEFTune", "vLLM", "transformers"],
    links: { demo: "#", repo: "#" },
    image: "/project-3.png" // Placeholder
  },
  {
    title: "Prédiction du risque crédit par détection d’anomalie",
    description: "Détection du risque client pour l’octroi de prêts via des techniques de détection d’anomalies.",
    tags: ["XGBoost", "Imbalanced class", "Features Engineering", "FastAPI"],
    links: { demo: "#", repo: "#" },
    image: "/project-3.png" // Placeholder
  },
  {
    title: "System de recommandation de vidéos sur les réseaux sociaux",
    description: "Conception et implémentation  d'un système de recommandation de vidéos destiné aux plateformes de réseaux sociaux, avec pour objectif de personnaliser le contenu proposé aux utilisateurs et d’optimiser leur engagement (temps de visionnage, likes, partages).",
    tags: ["ALS", "Collaborative filtering", "Content-based filtering", "Feature engineering", "Scikit-learn", "PySpark"],
    links: { demo: "#", repo: "#" },
    image: "/project-3.png" // Placeholder
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="py-32">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">Selected Projects</h2>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <div key={index} className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h3 className="text-3xl font-bold group-hover:text-gray-300 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={`${tag}-${tagIndex}`}
                    className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href={project.links.repo} className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2 aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative group-hover:border-white/20 transition-colors">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
