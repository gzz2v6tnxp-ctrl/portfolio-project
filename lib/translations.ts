export const translations = {
    en: {
        // Header
        nav: {
            projects: "Projects",
            experience: "Experience",
            tools: "Tools",
            about: "About",
            certifications: "Certifications",
            contact: "Contact Me"
        },
        // Hero
        hero: {
            greeting: "Hello, I'm a",
            title: "AI Engineer",
            subtitle: "LLM & Production Systems",
            specialization: "Specialized in",
            skill1: "RAG & Agents",
            skill2: "MLOps",
            description: "From research to production — I build scalable AI systems with end-to-end pipelines. Specializing in LLM deployment, Agentic RAG, Computer Vision, and ML infrastructure with production-grade observability.",
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
            bio1: "AI Engineer with",
            experience: "3+ years",
            bio2: "of experience building production AI systems. I specialize in",
            bio3: "end-to-end ML pipelines",
            bio4: ", from data processing to deployment and monitoring.",
            bio5: "I've deployed LLMs, Agentic RAG architectures, and Computer Vision models in production environments handling real traffic — with proper observability via Langfuse and Arize Phoenix. I focus on systems that deliver measurable business impact.",
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
            contact: "Me Contacter"
        },
        // Hero
        hero: {
            greeting: "Bonjour, je suis",
            title: "AI Engineer",
            subtitle: "LLM & Production Systems",
            specialization: "Spécialisée en",
            skill1: "RAG & Agents",
            skill2: "MLOps",
            description: "De la recherche à la production — je construis des systèmes IA scalables avec des pipelines end-to-end. Spécialisée dans le déploiement de LLM, le RAG Agentique, la Computer Vision et l'infrastructure ML avec observabilité production.",
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
            bio1: "AI Engineer avec",
            experience: "3+ ans",
            bio2: "d'expérience dans la construction de systèmes IA en production. Je me spécialise dans",
            bio3: "les pipelines ML de bout en bout",
            bio4: ", de la préparation des données au déploiement et monitoring.",
            bio5: "J'ai déployé des LLM, des architectures RAG Agentiques et des modèles de Computer Vision en production gérant du trafic réel — avec observabilité via Langfuse et Arize Phoenix. Je me concentre sur les systèmes à impact business mesurable.",
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
