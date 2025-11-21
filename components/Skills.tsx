'use client';

import Section from './ui/Section';
import { Terminal, Cpu, Database, Cloud } from 'lucide-react';

const skills = [
  {
    category: "Machine Learning",
    icon: <Cpu className="w-6 h-6" />,
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face Transformers", "LLMs", "RAG"]
  },
  {
    category: "MLOps",
    icon: <Cloud className="w-6 h-6" />,
    items: ["Docker", "Kubernetes", "CI/CD", "MLflow", "Airflow", "DVC", "Terraform"]
  },
  {
    category: "Backend & Data",
    icon: <Database className="w-6 h-6" />,
    items: ["Python", "FastAPI", "PostgreSQL", "MongoDB", "Vector Databases (Qdrant/Pinecone)"]
  },
  {
    category: "Tools",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Git", "Linux", "Bash", "AWS/GCP", "Vercel", "LangChain"]
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
