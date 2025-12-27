'use client';

import { motion } from 'framer-motion';
import Section from './ui/Section';
import { useLanguage } from '@/lib/LanguageContext';
import { BookOpen, Target, ExternalLink, GraduationCap, Award, TrendingUp, CheckCircle } from 'lucide-react';

const currentLearning = [
    {
        title: {
            en: "Machine Learning and AI with Python",
            fr: "Machine Learning et IA avec Python"
        },
        provider: "Harvard University (edX)",
        type: "course" as const,
        status: "in-progress" as const,
        url: "https://www.edx.org/learn/machine-learning/harvard-university-machine-learning-and-ai-with-python",
        icon: "harvard",
        description: {
            en: "Comprehensive course covering ML fundamentals, neural networks, and practical AI applications with Python",
            fr: "Formation complète couvrant les fondamentaux du ML, les réseaux de neurones et les applications pratiques de l'IA avec Python"
        }
    },
    {
        title: {
            en: "Complete Statistics for Data Science",
            fr: "Statistiques Complètes pour la Data Science"
        },
        provider: "Simplilearn",
        type: "course" as const,
        status: "in-progress" as const,
        url: "https://www.youtube.com/watch?v=Jiun-ObpJlE",
        icon: "stats",
        description: {
            en: "Deep dive into statistics and probability theory essential for data science",
            fr: "Approfondissement des statistiques et de la théorie des probabilités essentielles pour la data science"
        }
    },
    {
        title: {
            en: "AWS Certified AI Practitioner",
            fr: "AWS Certified AI Practitioner"
        },
        provider: "Amazon Web Services",
        type: "certification" as const,
        status: "upcoming" as const,
        url: "https://aws.amazon.com/fr/certification/certified-ai-practitioner/",
        icon: "aws",
        description: {
            en: "Next certification target: Validate expertise in AI/ML concepts and AWS AI services",
            fr: "Prochaine certification visée : Valider l'expertise en concepts IA/ML et services AWS AI"
        }
    },
    {
        title: {
            en: "Datatour 2025 Participation",
            fr: "Participation au Datatour 2025"
        },
        provider: "Datatour",
        type: "certification" as const,
        status: "completed" as const,
        url: "https://drive.google.com/file/d/1PEwXtr2fuLAv8vt5lkEvw01LHaFpDHk7/view?usp=sharing",
        icon: "datatour",
        description: {
            en: "Certificate of participation in Datatour 2025, validating engagement with the data community and latest industry trends.",
            fr: "Certificat de participation au Datatour 2025, validant l'engagement auprès de la communauté data et les dernières tendances du secteur."
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

export default function Learning() {
    const { language, t } = useLanguage();

    const getIcon = (type: string, status: string) => {
        if (status === 'upcoming') return <Target className="w-6 h-6" />;
        if (type === 'certification') return <Award className="w-6 h-6" />;
        return <BookOpen className="w-6 h-6" />;
    };

    const getStatusBadge = (status: string) => {
        if (status === 'in-progress') {
            return (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium">
                    <TrendingUp className="w-3 h-3" />
                    {t.learning.inProgress}
                </span>
            );
        }
        if (status === 'completed') {
            return (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    {t.learning.completed}
                </span>
            );
        }
        return (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-medium">
                <Target className="w-3 h-3" />
                {t.learning.upcoming}
            </span>
        );
    };

    return (
        <Section id="learning" className="py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <div className="flex items-center gap-4 mb-4">
                    <GraduationCap className="w-10 h-10 text-blue-400" />
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        {t.learning.title}
                    </h2>
                </div>
                <p className="text-gray-400 text-lg max-w-2xl">
                    {t.learning.subtitle}
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {currentLearning.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        {/* Gradient glow effect on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 rounded-xl bg-white/5 text-white/70 group-hover:text-blue-400 transition-colors">
                                    {getIcon(item.type, item.status)}
                                </div>
                                {getStatusBadge(item.status)}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                                {item.title[language]}
                            </h3>

                            {/* Provider */}
                            <div className="text-sm text-blue-400 font-medium mb-3">
                                {item.provider}
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {item.description[language]}
                            </p>

                            {/* Link indicator */}
                            <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white/70 transition-colors">
                                <ExternalLink className="w-4 h-4" />
                                {t.learning.viewCourse}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            {/* Continuous Learning Message */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 border border-white/5"
            >
                <p className="text-center text-gray-400 italic">
                    {t.learning.commitment}
                </p>
            </motion.div>
        </Section>
    );
}
