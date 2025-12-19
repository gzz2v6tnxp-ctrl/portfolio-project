'use client';

import Section from './ui/Section';
import { Terminal, Cpu, Database, Cloud } from 'lucide-react';

const skills = [
  {
    category: "Tech Stack",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Python", "FastAPI", "SQL"]
  },
  {
    category: "MLOps & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    items: [
      "Git",
      "Docker",
      "CI/CD",
      "Google Cloud Platform",
      "MLflow",
      "Airflow",
      "DVC (expérimental)"
    ]
  },
  {
    category: "Data Science & Machine Learning",
    icon: <Database className="w-6 h-6" />,
    items: [
      "Statistiques des données",
      "Machine Learning",
      "Apache Spark",
      "Hadoop"
    ]
  },
  {
    category: "AI & GenAI",
    icon: <Brain className="w-6 h-6" />,
    items: [
      "Large Language Models (LLM)",
      "Small Language Models (SLM)",
      "Gemini",
      "OpenAI",
      "Llama 3",
      "RAG",
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "LoRA",
      "QLoRA",
      "PEFT",
      "vLLM"
    ]
  },
  {
    category: "Platforms & Tools",
    icon: <Terminal className="w-6 h-6" />,
    items: [
      "Vertex AI Training",
      "Kaggle",
      "Google Colab",
      "Hugging Face"
    ]
  },
  {
    category: "Computer Vision & OCR",
    icon: <Scan className="w-6 h-6" />,
    items: [
      "Numérisation de documents",
      "Extraction d’informations",
      "Reconnaissance Optique de Caractères (OCR)"
    ]
  },
  {
    category: "Certifications & Distinctions",
    icon: <Award className="w-6 h-6" />,
    items: [
      "Certifiée Columbia University",
      "Finaliste Datatour 2025"
    ]
  },
  {
    category: "Soft Skills & Langues",
    icon: <MessageCircle className="w-6 h-6" />,
    items: [
      "Communication verbale et écrite exceptionnelle",
      "Français courant",
      "Anglais professionnel"
    ]
  }
];


export default function Skills() {
  return (
    <Section id="skills" className="py-32">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={skill.category} 
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-white/10">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span 
                  key={item}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/5 text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
