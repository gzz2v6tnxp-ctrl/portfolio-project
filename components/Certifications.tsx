'use client';

import { motion } from 'framer-motion';
import Section from './ui/Section';
import { useLanguage } from '@/lib/LanguageContext';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const certifications = [
    {
        title: {
            en: "Columbia University — Data/AI Specialization",
            fr: "Columbia University — Spécialisation Data/IA"
        },
        issuer: "Columbia University",
        date: "2024",
        url: "https://badges.plus.columbia.edu/ca158ce4-b301-46dc-b90f-5b92e2c30f6d",
        description: {
            en: "Certified specialization in Data Science and Artificial Intelligence from Columbia University.",
            fr: "Spécialisation certifiée en Data Science et Intelligence Artificielle de l'Université Columbia."
        }
    },
    {
        title: {
            en: "Huawei Certified ICT Associate — Cloud Computing",
            fr: "Huawei Certified ICT Associate — Cloud Computing"
        },
        issuer: "Huawei",
        date: "2023",
        url: "#",
        description: {
            en: "Validated knowledge in Cloud Computing technologies, including virtualization, storage, and network.",
            fr: "Connaissances validées en technologies Cloud Computing, y compris la virtualisation, le stockage et le réseau."
        }
    },
    {
        title: {
            en: "Datatour 2025 — Finalist",
            fr: "Datatour 2025 — Finaliste"
        },
        issuer: "Datatour",
        date: "2025",
        url: "https://drive.google.com/file/d/1PEwXtr2fuLAv8vt5lkEvw01LHaFpDHk7/view?usp=sharing",
        description: {
            en: "Finalist in the Datatour 2025 national data competition.",
            fr: "Finaliste de la compétition nationale de données Datatour 2025."
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Certifications() {
    const { language, t } = useLanguage();

    return (
        <Section id="certifications" className="py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <div className="flex items-center gap-4 mb-4">
                    <Award className="w-10 h-10 text-purple-400" />
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        {t.certifications.title}
                    </h2>
                </div>
                <p className="text-gray-400 text-lg max-w-2xl">
                    {t.certifications.subtitle}
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {certifications.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 rounded-xl bg-white/5 text-white/70 group-hover:text-purple-400 transition-colors">
                                    <Award className="w-6 h-6" />
                                </div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
                                    <CheckCircle className="w-3 h-3" />
                                    {t.certifications.completed}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                                {item.title[language]}
                            </h3>

                            <div className="text-sm text-purple-400 font-medium mb-3">
                                {item.issuer}
                            </div>

                            <div className="text-xs text-gray-500 mb-3">
                                {item.date}
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {item.description[language]}
                            </p>

                            <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white/70 transition-colors">
                                <ExternalLink className="w-4 h-4" />
                                {t.certifications.viewCertificate}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </Section>
    );
}
