const PROJECTS = [
    {
        id: "domain-exposure-audit",
        image: "../../assets/img/dae.png",
        name: "Domain Exposure Audit",
        category: "cyber",
        tagline: "See your domain the way an attacker would — before they do.",
        description: "A CLI tool that generates a defensive exposure report for any domain, pulling publicly available information an attacker would gather before a phishing campaign — certificate transparency logs, WHOIS contact exposure, and breach history — so the owner can close those gaps first.",
        tags: [
            "bash", "cli", "security", "osint"
        ],
        link: {
            demo: "",
            github: "https://github.com/EgbewaleToluwani/Kali/tree/main/Domain%20Exposure%20Audit"  
        }
    },

    {
        id: "dalians-cafe",
        image: "../../assets/img/dalians.png",
        name: "Dalian's Cafe",
        category: "webdev",
        tagline: "An unsolicited redesign of a Downtown LA coffee shop.",
        description: "A full unsolicited redesign of Dalian's Cafe — a European-inspired coffee shop in Downtown Los Angeles. Focused on translating the shop's in-person warmth into a considered digital identity.",
        tags: [
            "html", "css", "responsive", "ui-design"
        ],
        link: {
            demo: "http://dalians-cafe.vercel.app/",
            github: "https://github.com/EgbewaleToluwani/Dalians-Cafe"
        }
    },

    {
        id: "kohi-coffee-brand",
        image: "../../assets/img/kohi.png",
        name: "Kōhī Coffee Brand",
        category: "webdev",
        tagline: "A full brand identity for a fictional specialty coffee house.",
        description: "Full specialty coffee brand website for a fictional coffee store — built to explore how far a brand's visual identity can carry a purely fictional product.",
        tags: [
            "html", "css", "responsive", "ui-design", "branding"
        ],
        link: {
            demo: "https://kohi-nine.vercel.app/kohi.html",
            github: "https://github.com/EgbewaleToluwani/Kohi"
        }
    },

    {
        id: "portfolio-website",
        image: "../../assets/img/portfolio.png",
        name: "Portfolio Website",
        category: "webdev",
        tagline: "This site. Two personas, one build.",
        description: "This site. A dual-mode, interactive portfolio built to be explored rather than scrolled — bold Studio/Ops duality, an animated mode transition, and real interaction instead of a static resume in disguise.",
        tags: [
            "html", "css", "javascript", "ui-design", "responsive"
        ],
        link: {
            demo: "http://egbewaletoluwani-portfolio.vercel.app/",
            github: "https://github.com/EgbewaleToluwani/Portfolio-v3"
        }
    },

    {
        id: "responsive-landing-page",
        image: "../../assets/img/landing.png",
        name: "Responsive Landing Page",
        category: "webdev",
        tagline: "Layout discipline, stripped of decoration.",
        description: "Clean responsive webpage focused on layout structure, UI spacing, and responsiveness, built with semantic HTML and modern CSS.",
        tags: [
            "html", "css", "responsive", "ui-design", "semantic-html"
        ],
        link:  {
            demo: "http://theplacecollective.vercel.app/",
            github: "https://github.com/EgbewaleToluwani/The-Place-Collective"
        }
    },

    {
        id: "file-encryption-tool",
        image: "../../assets/img/compress.png",
        name: "File Encryption Tool",
        category: "cyber",
        tagline: "Compression in different formats, no GUI required.",
        description: "A CLI compression tool, built entirely in Bash, which supports gzip, bzip2, tar, and zip.",
        tags: [
            "bash", "cli", "security"
        ],
        link: {
            demo: "",
            github: "https://github.com/EgbewaleToluwani/Kali/tree/main"
        }
    },

    {
        id: "file-decompressor",
        image: "../../assets/img/compress.png",
        name: "File Decompressor",
        category: "cyber",
        tagline: "The encryption tool's counterpart — format-agnostic, on purpose.",
        description: "Follow-up to the encryption tool, using format-agnostic decompression to detect and extract archives without the user needing to know the format in advance.",
        tags: [
            "bash", "cli", "security"
        ],
        link: {
            demo: "",
            github: "https://github.com/EgbewaleToluwani/Kali/tree/main"
        }
    },

    {
        id: "kali-vm-environment",
        image: "../../assets/img/kali.png",
        name: "Kali Linux VM Environment",
        category: "others",
        tagline: "A hands-on lab, built and troubleshot from scratch.",
        description: "Configured and troubleshot a Kali Linux virtual machine environment for hands-on security practice.",
        tags: [
            "kali-linux", "vmware", "lab-environment"
        ],
        link: {

        }
    }
]

window.PROJECTS = PROJECTS;