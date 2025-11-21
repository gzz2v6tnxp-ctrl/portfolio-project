'use client';

import Section from './ui/Section';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "GenAI Workflow Frontend",
    description: "A modern, mobile-first RAG dashboard interface built with React and Vite. Features real-time metrics monitoring, animation-rich chat interface, and system health status.",
    tags: ["React", "Vite", "RAG", "Tailwind CSS"],
    links: { demo: "#", repo: "#" },
    image: "/project-1.png" // Placeholder
  },
  {
    title: "MLOps Pipeline Orchestrator",
    description: "End-to-end machine learning pipeline automation using Airflow and Kubernetes. Automated training, evaluation, and deployment of models.",
    tags: ["Python", "Airflow", "Kubernetes", "Docker"],
    links: { demo: "#", repo: "#" },
    image: "/project-2.png" // Placeholder
  },
  {
    title: "NLP Sentiment Analysis API",
    description: "High-performance FastAPI service for real-time sentiment analysis on financial news, deployed on AWS Lambda.",
    tags: ["FastAPI", "BERT", "AWS", "Serverless"],
    links: { demo: "#", repo: "#" },
    image: "/project-3.png" // Placeholder
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="py-32">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">Selected Projects</h2>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <div key={index} className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h3 className="text-3xl font-bold group-hover:text-gray-300 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href={project.links.repo} className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2 aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative group-hover:border-white/20 transition-colors">
               <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                 {/* Placeholder for image */}
                 <span className="text-sm">Project Preview</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
