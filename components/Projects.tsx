'use client';

import { motion } from 'framer-motion';
import Section from './ui/Section';
import { ExternalLink, Github, CheckCircle, Clock, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { useState } from 'react';
import Lightbox from './ui/Lightbox';

const projects = [
  {
    title: "Agent RAG avec Monitoring",
    description: {
      en: "A modern, mobile-optimized RAG-Agent dashboard interface built with React and Vite. Features real-time metrics monitoring, animated chat interface, and system health status. Implements CoVe (Chain of Verification) for reliable responses.",
      fr: "Une interface de tableau de bord RAG-Agent moderne et optimisée pour les mobiles, développée avec React et Vite. Surveillance des indicateurs en temps réel, interface de chat animée et état de santé du système. Implémente CoVe (Chain of Verification) pour des réponses fiables."
    },
    tags: ["React", "Vite", "RAG", "CoVe", "QDrant", "Docker", "Tailwind CSS"],
    links: { demo: "#", repo: "https://github.com/gzz2v6tnxp-ctrl/genai-workflow-automate" },
    image: "/images/1764792239952.jpg",
    status: "completed" as const
  },
  {
    title: "Clinical Scribe (Healthcare Domain)",
    description: {
      en: "Fine-tuned LLaMA 3 8B to transform unstructured doctor-patient transcriptions into structured clinical notes (SOAP format). Production-ready pipeline with Airflow orchestration, LoRA fine-tuning, and ROUGE-L evaluation metrics.",
      fr: "Fine-tuning de LLaMA 3 8B pour transformer des transcriptions médecin-patient non structurées en notes cliniques structurées (format SOAP). Pipeline prêt pour la production avec orchestration Airflow, fine-tuning LoRA et métriques d'évaluation ROUGE-L."
    },
    tags: ["Python", "Airflow", "Kaggle", "PEFT", "LoRA", "ROUGE-L", "Transformers", "LLaMA 3"],
    links: { demo: "#", repo: "https://github.com/gzz2v6tnxp-ctrl/clinical-scribe" },
    image: "",
    status: "completed" as const
  },
  {
    title: "Fine-tuning SDXL LoRA DreamBooth",
    description: {
      en: "Advanced image generation model using DreamBooth + LoRA on SDXL. Combines Midjourney for high-quality base images, Albumentations for augmentation, StyleGAN2-ADA for diversity, and BLIP+LLM for caption refinement.",
      fr: "Modèle de génération d'images avancé utilisant DreamBooth + LoRA sur SDXL. Combine Midjourney pour des images de base de haute qualité, Albumentations pour l'augmentation, StyleGAN2-ADA pour la diversité, et BLIP+LLM pour l'affinement des légendes."
    },
    tags: ["Stable Diffusion XL", "DreamBooth", "LoRA", "StyleGAN2-ADA", "BLIP", "Albumentations", "Hugging Face"],
    links: { demo: "https://huggingface.co/Irina-Igmm/cat_brave_leader_LoRA", repo: "https://huggingface.co/Irina-Igmm/cat_brave_leader_LoRA" },
    image: "/images/07_seed49_a_photo_of_a_cute_cat_on_a_bucket_at_the.png",
    status: "completed" as const
  },
  {
    title: "Credit Risk Scoring via Anomaly Detection",
    description: {
      en: "ML-powered credit risk prediction system using anomaly detection techniques. Handles imbalanced datasets with advanced feature engineering and XGBoost. Deployed as REST API with FastAPI.",
      fr: "Système de prédiction du risque crédit basé sur le ML utilisant des techniques de détection d'anomalies. Gère les jeux de données déséquilibrés avec feature engineering avancé et XGBoost. Déployé en API REST avec FastAPI."
    },
    tags: ["XGBoost", "Imbalanced Learning", "Feature Engineering", "FastAPI", "Scikit-learn"],
    links: { demo: "#", repo: "#" },
    image: "",
    status: "in-progress" as const
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Projects() {
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Section id="projects" className="py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter"
      >
        {t.projects.title}
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-20"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 md:order-1 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-3xl font-bold group-hover:text-gray-300 transition-colors">{project.title}</h3>
                {project.status === 'completed' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {t.projects.completed}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm">
                    <Clock className="w-3.5 h-3.5" />
                    {t.projects.inProgress}
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">{project.description[language]}</p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, staggerChildren: 0.05 }}
                className="flex flex-wrap gap-2"
              >
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={`${tag}-${tagIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: tagIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/80 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
              <div className="flex gap-4 pt-4">
                <motion.a
                  href={project.links.demo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> {t.projects.liveDemo}
                </motion.a>
                <motion.a
                  href={project.links.repo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors"
                >
                  <Github className="w-4 h-4" /> {t.projects.code}
                </motion.a>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage({ src: project.image, alt: project.title })}
              className="order-1 md:order-2 aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative group-hover:border-white/20 transition-colors cursor-zoom-in"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

              {/* Zoom Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                <ZoomIn className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <Lightbox
        isOpen={!!selectedImage}
        imageSrc={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
        onClose={() => setSelectedImage(null)}
      />
    </Section>
  );
}
