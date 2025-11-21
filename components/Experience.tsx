'use client';

import Section from './ui/Section';

const experiences = [
  {
    role: "Machine Learning Engineer",
    company: "Tech Company A",
    period: "2023 - Present",
    description: "Leading the development of LLM-based internal tools. Optimized inference latency by 40% using quantization techniques. Implemented automated retraining pipelines."
  },
  {
    role: "Data Scientist / ML Engineer",
    company: "Startup B",
    period: "2021 - 2023",
    description: "Developed and deployed recommendation engines for e-commerce. Built data processing pipelines processing 1TB+ daily. Collaborated with product teams to define AI features."
  },
  {
    role: "Software Engineer Intern",
    company: "Corp C",
    period: "2020 - 2021",
    description: "Worked on backend API development using Python/Django. Assisted in migrating legacy services to microservices architecture."
  }
];

export default function Experience() {
  return (
    <Section id="experience" className="py-32">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="border-l-2 border-white/10 pl-8 relative py-2 hover:border-white/30 transition-colors"
          >
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black border-2 border-white/10" />
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <span className="text-gray-500 font-mono text-sm">{exp.period}</span>
            </div>
            <div className="text-lg text-gray-300 mb-4">{exp.company}</div>
            <p className="text-gray-400 max-w-3xl leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
