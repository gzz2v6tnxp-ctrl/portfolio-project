'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Globe } from 'lucide-react';

export default function Header() {
  const { language, t, toggleLanguage } = useLanguage();

  const navItems = [
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.tools, href: '#skills' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <Link href="/" className="text-xl font-bold tracking-tighter hover:text-gray-300 transition-colors">
        Sitraka Laurà
      </Link>

      <nav className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {/* Language Toggle */}
        <motion.button
          onClick={toggleLanguage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full border border-white/20 hover:bg-white/10 transition-colors"
        >
          <Globe className="w-4 h-4" />
          <span>{language.toUpperCase()}</span>
        </motion.button>

        <a
          href="mailto:irinasitra67@gmail.com"
          className="px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
        >
          {t.nav.contact}
        </a>
      </div>
    </motion.header>
  );
}
