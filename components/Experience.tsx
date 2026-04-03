'use client';

import { motion } from 'framer-motion';
import Section from './ui/Section';
import { useLanguage } from '@/lib/LanguageContext';

const experiences = [
  {
    role: {
      en: "AI Engineer | GenAI, RAG & Computer Vision",
      fr: "AI Engineer | GenAI, RAG & Computer Vision"
    },
    company: "Malitix",
    period: { en: "Since 2024", fr: "Depuis 2024" },
    description: {
      en: "Design and deployment of the company's industrial AI ecosystem. Built a multimodal sales assistant (WhatsApp/Messenger) handling ~100 conversations/day across 800+ products with 80% relevance rate — MVP delivered in 2 weeks. Automated document extraction (~100 docs/day per client) via OCR + LLM, replacing manual Odoo verification with 95% accuracy. Deployed anomaly detection pipeline on banking statements (~200 statements/day) on private cloud under strict data confidentiality constraints. End-to-end observability with Langfuse and Arize Phoenix.",
      fr: "Conception et déploiement de l'écosystème IA industriel de l'entreprise. Développement d'un assistant de vente multimodal (WhatsApp/Messenger) traitant ~100 conversations/jour sur un catalogue de 800+ produits avec un taux de pertinence de 80% — MVP livré en 2 semaines. Automatisation de l'extraction documentaire (~100 docs/jour par client) via OCR + LLM, remplaçant la vérification manuelle Odoo avec 95% de précision. Pipeline de détection d'anomalies sur relevés bancaires (~200 relevés/jour) en cloud privé sous contrainte de confidentialité stricte. Observabilité end-to-end via Langfuse et Arize Phoenix."
    }
  },
  {
    role: {
      en: "Data Scientist",
      fr: "Data Scientist"
    },
    company: "Relia Consulting",
    period: { en: "2023 - 2024", fr: "2023 - 2024" },
    description: {
      en: "Design of industrial Data/ML pipelines and technical support. Built an accounting chatbot via Rasa with end-to-end data preparation and testing. Developed a stock prediction system using linear regression and Adam optimization with experimental tracking via Weights & Biases.",
      fr: "Conception de pipelines Data/ML industriels et support technique. Développement d'un chatbot comptable via Rasa avec préparation de données et tests end-to-end. Système de prédiction de stock par régression linéaire et optimisation Adam avec suivi expérimental Weights & Biases."
    }
  },
  {
    role: {
      en: "Freelance Developer",
      fr: "Développeuse Freelance"
    },
    company: "RKWT OCEAN LTD",
    period: { en: "2021 - 2023", fr: "2021 - 2023" },
    description: {
      en: "Design and deployment of web applications and PWAs. Strategic PostgreSQL architecture for the Ministry of Agriculture in Madagascar. Development of critical application modules for CNAPS, ensuring system interoperability and implementing social assistance features for maternity benefits.",
      fr: "Conception et déploiement d'applications web et PWA. Architecture PostgreSQL stratégique pour le Ministère de l'Agriculture à Madagascar. Développement de modules applicatifs critiques pour la CNAPS, assurant l'interopérabilité des systèmes et la mise en œuvre de fonctionnalités d'aide sociale aux prestations d'accouchement."
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
