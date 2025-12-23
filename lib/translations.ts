export const translations = {
    en: {
        // Header
        nav: {
            projects: "Projects",
            experience: "Experience",
            tools: "Tools",
            about: "About",
            contact: "Contact Me"
        },
        // Hero
        hero: {
            greeting: "Hello, I'm a",
            title: "ML Engineer",
            subtitle: "Production-Ready AI",
            specialization: "Specialized in",
            skill1: "MLOps",
            skill2: "Applied NLP",
            description: "From research to production — I build robust, scalable AI solutions with end-to-end pipelines. Specializing in LLM deployment, RAG systems, and ML infrastructure.",
            viewWork: "View Work",
            availableBadge: "Available for Remote Work"
        },
        // Projects
        projects: {
            title: "Selected Projects",
            completed: "Completed",
            inProgress: "In Progress",
            liveDemo: "Live Demo",
            code: "Code"
        },
        // About
        about: {
            title: "About Me",
            bio1: "ML Engineer with",
            experience: "3+ years",
            bio2: "of experience transforming AI research into production systems. I specialize in",
            bio3: "end-to-end ML pipelines",
            bio4: ", from data processing to deployment.",
            bio5: "My focus: building reliable AI systems that work at scale. I've deployed LLMs, RAG architectures, and computer vision models in production environments with proper monitoring and evaluation.",
            remoteTitle: "Remote Work Ready",
            location: "Based in Madagascar (UTC+3)",
            hours: "Flexible hours, overlap with EU & US timezones",
            languages: "Fluent French & Professional English"
        },
        // Skills
        skills: {
            title: "Expertise"
        },
        // Experience
        experience: {
            title: "Experience",
            since: "Since"
        },
        // Footer
        footer: {
            copyright: "Built with Next.js & Tailwind CSS."
        }
    },
    fr: {
        // Header
        nav: {
            projects: "Projets",
            experience: "Expérience",
            tools: "Outils",
            about: "À propos",
            contact: "Me Contacter"
        },
        // Hero
        hero: {
            greeting: "Bonjour, je suis",
            title: "ML Engineer",
            subtitle: "Production-Ready AI",
            specialization: "Spécialisé en",
            skill1: "MLOps",
            skill2: "NLP Appliqué",
            description: "De la recherche à la production — je construis des solutions IA robustes et évolutives avec des pipelines de bout en bout. Spécialisée dans le déploiement de LLM, les systèmes RAG et l'infrastructure ML.",
            viewWork: "Voir mes travaux",
            availableBadge: "Disponible en Remote"
        },
        // Projects
        projects: {
            title: "Projets Sélectionnés",
            completed: "Terminé",
            inProgress: "En cours",
            liveDemo: "Démo",
            code: "Code"
        },
        // About
        about: {
            title: "À propos de moi",
            bio1: "Ingénieure ML avec",
            experience: "3+ ans",
            bio2: "d'expérience dans la transformation de la recherche IA en systèmes de production. Je me spécialise dans",
            bio3: "les pipelines ML de bout en bout",
            bio4: ", de la préparation des données au déploiement.",
            bio5: "Mon objectif : créer des systèmes IA fiables qui fonctionnent à grande échelle. J'ai déployé des LLM, des architectures RAG et des modèles de vision par ordinateur en production avec un suivi et une évaluation appropriés.",
            remoteTitle: "Prête pour le Remote",
            location: "Basée à Madagascar (UTC+3)",
            hours: "Horaires flexibles, chevauchement avec les fuseaux EU & US",
            languages: "Français courant & Anglais professionnel"
        },
        // Skills
        skills: {
            title: "Expertise"
        },
        // Experience
        experience: {
            title: "Expérience",
            since: "Depuis"
        },
        // Footer
        footer: {
            copyright: "Construit avec Next.js & Tailwind CSS."
        }
    }
};

export type Language = 'en' | 'fr';
export type Translations = typeof translations.en;
