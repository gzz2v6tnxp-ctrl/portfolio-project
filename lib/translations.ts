export const translations = {
    en: {
        // Header
        nav: {
            projects: "Projects",
            experience: "Experience",
            tools: "Tools",
            about: "About",
            certifications: "Certifications",
            learning: "Learning",
            contact: "Contact Me"
        },
        // Hero
        hero: {
            greeting: "Hello, I'm a",
            title: "Data Scientist / ML Engineer",
            subtitle: "for Production",
            specialization: "Specialized in",
            skill1: "MLOps",
            skill2: "Applied NLP",
            description: "From research to production — I build robust, scalable AI solutions with end-to-end pipelines. Specializing in LLM deployment, RAG systems, and ML infrastructure.",
            viewWork: "View Work",
            getResume: "Get Resume",
            availableBadge: "Available for Remote Work"
        },
        // Projects
        projects: {
            title: "Selected Projects",
            completed: "Completed",
            inProgress: "In Progress",
            liveDemo: "Live Demo",
            code: "Code",
            codeSource: "Code Source",
            backendOnly: "Backend Only",
            watchDemo: "Watch Demo",
            modelRepo: "Model Repo"
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
        // Learning
        learning: {
            title: "Continuous Learning",
            subtitle: "Currently investing in critical domains to stay at the cutting edge of AI/ML",
            inProgress: "In Progress",
            completed: "Completed",
            upcoming: "Next Target",
            viewCourse: "View Course",
            commitment: "\"Committed to continuous learning — I believe staying current with the latest advances in AI/ML is essential for building production-grade solutions.\""
        },
        // Certifications
        certifications: {
            title: "Certifications",
            subtitle: "Validated expertise in cloud computing, AI, and data science.",
            completed: "Completed",
            upcoming: "In Progress",
            viewCertificate: "View Certificate"
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
            certifications: "Certifications",
            learning: "Formation",
            contact: "Me Contacter"
        },
        // Hero
        hero: {
            greeting: "Bonjour, je suis",
            title: "Data Scientist / ML Engineer",
            subtitle: "pour la Production",
            specialization: "Spécialisé en",
            skill1: "MLOps",
            skill2: "NLP Appliqué",
            description: "De la recherche à la production — je construis des solutions IA robustes et évolutives avec des pipelines de bout en bout. Spécialisée dans le déploiement de LLM, les systèmes RAG et l'infrastructure ML.",
            viewWork: "Voir mes travaux",
            getResume: "Télécharger CV",
            availableBadge: "Disponible en Remote"
        },
        // Projects
        projects: {
            title: "Projets Sélectionnés",
            completed: "Terminé",
            inProgress: "En cours",
            liveDemo: "Démo",
            code: "Code",
            codeSource: "Code Source",
            backendOnly: "Backend Uniquement",
            watchDemo: "Voir la Démo",
            modelRepo: "Modèle (Hugging Face)"
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
        // Learning
        learning: {
            title: "Formation Continue",
            subtitle: "J'investis actuellement dans des domaines critiques pour rester à la pointe de l'IA/ML",
            inProgress: "En cours",
            completed: "Terminé",
            upcoming: "Prochain objectif",
            viewCourse: "Voir le cours",
            commitment: "\"Engagée dans l'apprentissage continu — je crois que rester à jour avec les dernières avancées en IA/ML est essentiel pour construire des solutions de qualité production.\""
        },
        // Certifications
        certifications: {
            title: "Certifications",
            subtitle: "Expertise validée en cloud computing, IA et data science.",
            completed: "Terminé",
            upcoming: "En cours",
            viewCertificate: "Voir le certificat"
        },
        // Footer
        footer: {
            copyright: "Construit avec Next.js & Tailwind CSS."
        }
    }
};

export type Language = 'en' | 'fr';
export type Translations = typeof translations.en;
