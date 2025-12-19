'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Tools', href: '#skills' },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <Link href="/" className="text-xl font-bold tracking-tighter hover:text-gray-300 transition-colors">
        PORTFOLIO
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

      <a 
        href="mailto:irinasitra67@gmail.com" 
        className="px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
      >
        Contact Me
      </a>
    </motion.header>
  );
}
