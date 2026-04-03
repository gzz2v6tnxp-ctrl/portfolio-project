'use client';

import { motion } from 'framer-motion';
import Section from './ui/Section';
import { CheckCircle, ZoomIn, Play, Server, Code, Database } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { useState } from 'react';
import Lightbox from './ui/Lightbox';

interface Project {
  title: string;
  description: { en: string; fr: string };
  tags: string[];
  links: { codeSource: string; demoVideo: string };
  image: string;
  status: 'completed' | 'in-progress';
  projectType: 'fullstack' | 'api' | 'frontend';
  model_ripo?: string;
}

const projects: Project[] = [
  {
    title: "Agent RAG avec Monitoring",
    description: {
      en: "Production multimodal sales assistant (WhatsApp/Messenger) handling ~100 conversations/day over 800+ products. Hybrid text/image search (BM25 + multimodal embeddings, Qdrant) with real-time ordering. 80% relevance rate. Implements CoVe (Chain of Verification) for reliable responses. Real-time metrics monitoring dashboard.",
      fr: "Assistant de vente multimodal en production (WhatsApp/Messenger) traitant ~100 conversations/jour sur 800+ produits. Recherche hybride texte/image (BM25 + Embeddings multimodaux, Qdrant) avec commande en temps réel. Taux de pertinence de 80%. Implémente CoVe (Chain of Verification) pour des réponses fiables. Dashboard de monitoring en temps réel."
    },
    tags: ["React", "Vite", "RAG", "CoVe", "QDrant", "Docker", "Tailwind CSS", "Gemini", "BM25"],
    links: {
      codeSource: "https://github.com/gzz2v6tnxp-ctrl/genai-workflow-automate",
      demoVideo: ""
    },
    image: "/images/1764792239952.jpg",
    status: "completed" as const,
    projectType: "fullstack" as const
  },
  {
    title: "Clinical Scribe (Healthcare Domain)",
    description: {
      en: "Fine-tuned LLaMA 3 8B to transform unstructured doctor-patient transcriptions into structured clinical notes (SOAP format). Production-ready pipeline with Airflow orchestration, LoRA fine-tuning, PII anonymization, and ROUGE-L evaluation metrics.",
      fr: "Fine-tuning de LLaMA 3 8B pour transformer des transcriptions médecin-patient non structurées en notes cliniques structurées (format SOAP). Pipeline prêt pour la production avec orchestration Airflow, fine-tuning LoRA, anonymisation PII et métriques d'évaluation ROUGE-L."
    },
    tags: ["Python", "Airflow", "PEFT", "LoRA", "ROUGE-L", "BERTScore", "Transformers", "LLaMA 3"],
    links: {
      codeSource: "https://github.com/gzz2v6tnxp-ctrl/clinical-scribe",
      demoVideo: ""
    },
    image: "/images/Gemini_Generated_Image_dz6th6dz6th6dz6t.png",
    model_ripo: "https://huggingface.co/Irina-Igmm/clinical-scribe-llama-3-merged",
    status: "completed" as const,
    projectType: "api" as const
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {t.projects.completed}
                </span>
                {project.projectType === 'api' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm">
                    <Server className="w-3.5 h-3.5" />
                    {t.projects.backendOnly}
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
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href={project.links.codeSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors"
                >
                  <Code className="w-4 h-4" /> {t.projects.codeSource}
                </motion.a>

                {project.links.demoVideo && (
                  <motion.a
                    href={project.links.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Play className="w-4 h-4" /> {t.projects.watchDemo}
                  </motion.a>
                )}

                {project.model_ripo && (
                  <motion.a
                    href={project.model_ripo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    <Database className="w-4 h-4" /> {t.projects.modelRepo}
                  </motion.a>
                )}
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
