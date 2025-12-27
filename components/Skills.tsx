'use client';

import { motion } from 'framer-motion';
import Section from './ui/Section';
import { Award, Brain, Cloud, Cpu, Database, MessageCircle, Scan, Terminal } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const getSkills = (language: 'en' | 'fr') => [
  {
    category: "MLOps & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    items: [
      "Docker",
      "CI/CD",
      "Google Cloud Platform",
      "MLflow",
      "Airflow",
      "Weights & Biases",
      "DVC"
    ]
  },
  {
    category: "AI & GenAI",
    icon: <Brain className="w-6 h-6" />,
    items: [
      "LLM Fine-tuning",
      language === 'en' ? "RAG Systems" : "Systèmes RAG",
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "LoRA / QLoRA / PEFT",
      "vLLM",
      "OpenAI / Gemini / Llama 3"
    ]
  },
  {
    category: "Tech Stack",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Python", "FastAPI", "SQL", "Git"]
  },
  {
    category: language === 'en' ? "Data Science & ML" : "Data Science & ML",
    icon: <Database className="w-6 h-6" />,
    items: [
      language === 'en' ? "Statistical Analysis" : "Analyse statistique",
      "Machine Learning",
      "Apache Spark",
      "Hadoop"
    ]
  },
  {
    category: language === 'en' ? "Platforms & Tools" : "Plateformes & Outils",
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
      language === 'en' ? "Document Digitization" : "Numérisation de documents",
      language === 'en' ? "Information Extraction" : "Extraction d'informations",
      language === 'en' ? "OCR" : "Reconnaissance Optique de Caractères"
    ]
  },

  {
    category: language === 'en' ? "Languages" : "Langues",
    icon: <MessageCircle className="w-6 h-6" />,
    items: [
      language === 'en' ? "Fluent French - C1" : "Français courant - C1",
      language === 'en' ? "Professional English - B2" : "Anglais professionnel - B"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } }
};

export default function Skills() {
  const { language, t } = useLanguage();
  const skills = getSkills(language);

  return (
    <Section id="skills" className="py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter"
      >
        {t.skills.title}
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.category}
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-3 rounded-full bg-white/10"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-bold">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/5 text-gray-300 cursor-default transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
