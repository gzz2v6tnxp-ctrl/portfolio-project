'use client';

import { motion } from 'framer-motion';
import Section from './ui/Section';
import { useLanguage } from '@/lib/LanguageContext';

const experiences = [
  {
    role: {
      en: "Data/AI Engineer",
      fr: "Ingénieur DATA/IA"
    },
    company: "Etech Consulting",
    period: { en: "Since 2024", fr: "Depuis 2024" },
    description: {
      en: "Architecture and deployment of end-to-end Data/ML pipelines, combining OCR, LLM and Computer Vision for automated document extraction and anomaly detection. Development of RAG systems enhanced by CoVe technique and classification models (ResNet) deployed as MVP, with rigorous ground truth evaluation.",
      fr: "Architecture et mise en production de pipelines Data/ML de bout en bout, combinant OCR, LLM et Computer Vision pour l'automatisation de l'extraction documentaire et de la détection d'anomalies. Développement de systèmes RAG fiabilisés par la technique CoVe et de modèles de classification (ResNet) déployés en MVP, avec une évaluation rigoureuse par ground truth."
    }
  },
  {
    role: {
      en: "Data Scientist / ML Engineer",
      fr: "Data Scientist / ML Engineer"
    },
    company: "Relia Consulting",
    period: { en: "2023 - 2024", fr: "2023 - 2024" },
    description: {
      en: "Design and deployment of end-to-end Data/ML pipelines, including OCR/LLM hybridization with ground truth evaluation protocol and reliable RAG systems. Development of Computer Vision models (ResNet) and stock prediction with experimental tracking via Weights & Biases to ensure production-grade robustness.",
      fr: "Conception et déploiement de pipelines Data/ML de bout en bout, incluant l'hybridation OCR/LLM avec protocole d'évaluation par ground truth et systèmes RAG fiabilisés. Développement de modèles de Computer Vision (ResNet) et de prédiction de stocks avec suivi expérimental sous Weights & Biases pour garantir la robustesse des solutions en production."
    }
  },
  {
    role: {
      en: "Freelance Developer",
      fr: "Développeur freelance"
    },
    company: "RKWT OCEAN LTD",
    period: { en: "2021 - 2023", fr: "2021 - 2023" },
    description: {
      en: "Design and deployment of web applications and PWAs, including strategic PostgreSQL architecture for the Ministry of Agriculture in Madagascar. Development of critical application modules for CNAPS, ensuring system interoperability and implementing social assistance features for maternity benefits.",
      fr: "Conception et déploiement d'applications web et PWA, incluant le pilotage d'une architecture PostgreSQL stratégique pour le Ministère de l'Agriculture à Madagascar. Développement de modules applicatifs critiques pour la CNAPS, assurant l'interopérabilité des systèmes et la mise en œuvre de fonctionnalités d'aide sociale aux prestations d'accouchement."
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function Experience() {
  const { language, t } = useLanguage();

  return (
    <Section id="experience" className="py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter"
      >
        {t.experience.title}
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-12"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ x: 10 }}
            className="border-l-2 border-white/10 pl-8 relative py-2 hover:border-white/30 transition-colors"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black border-2 border-white/10"
            />
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-2xl font-bold">{exp.role[language]}</h3>
              <span className="text-gray-500 font-mono text-sm">{exp.period[language]}</span>
            </div>
            <div className="text-lg text-gray-300 mb-4">{exp.company}</div>
            <p className="text-gray-400 max-w-3xl leading-relaxed">
              {exp.description[language]}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
