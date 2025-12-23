'use client';

import { motion } from 'framer-motion';
import Section from './ui/Section';
import { MapPin, Clock, Languages, Briefcase } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <Section id="about" className="py-32">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter"
            >
                {t.about.title}
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-6"
                >
                    <p className="text-xl text-gray-300 leading-relaxed">
                        {t.about.bio1} <span className="text-white font-medium">{t.about.experience}</span> {t.about.bio2} <span className="text-white font-medium">{t.about.bio3}</span>{t.about.bio4}
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        {t.about.bio5}
                    </p>
                </motion.div>

                {/* Remote Work Info */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-4"
                >
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                    >
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-emerald-400" />
                            {t.about.remoteTitle}
                        </h3>
                        <ul className="space-y-3">
                            <motion.li
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-3 text-gray-300"
                            >
                                <MapPin className="w-4 h-4 text-gray-500" />
                                <span>{t.about.location}</span>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-3 text-gray-300"
                            >
                                <Clock className="w-4 h-4 text-gray-500" />
                                <span>{t.about.hours}</span>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-3 text-gray-300"
                            >
                                <Languages className="w-4 h-4 text-gray-500" />
                                <span>{t.about.languages}</span>
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
}
