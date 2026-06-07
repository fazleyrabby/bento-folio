export const site = {
  name: "Alex Carter",
  role: "Full-Stack Engineer",
  shortBio: "Building thoughtful products at the intersection of design, infra, and AI.",
  longBio:
    "Independent engineer with a decade of experience shipping web platforms, dev tools, and infrastructure for startups across three continents. Currently focused on AI-native workflows and self-hostable software.",
  location: "Lisbon, Portugal",
  available: true,
  email: "hello@alexcarter.dev",
  avatar: "/avatar.svg",
  social: {
    github: "#",
    linkedin: "#",
    x: "#",
    rss: "#",
  },
  focus: {
    building: ["Nimbus Cloud"],
    learning: ["Rust", "Distributed Systems", "WebGPU"],
  },
  now: {
    working: "Nimbus Cloud — public beta launch",
    reading: "A Philosophy of Software Design",
    listening: "Bonobo · Tycho · Nils Frahm",
  },
  stats: {
    years: 10,
    projects: 47,
    technologies: 32,
  },
  github: {
    user: "alexcarter",
    stars: 2840,
    contributions: 1986,
    repos: 73,
  },
  tech: [
    "TypeScript", "React", "Next.js", "Astro", "Node.js",
    "Rust", "Go", "PostgreSQL", "Redis", "Docker",
    "Kubernetes", "AWS", "Tailwind", "tRPC", "GraphQL",
  ],
  uses: {
    hardware: [
      { name: "MacBook Pro 16” M4 Max", note: "Daily driver" },
      { name: "LG UltraFine 32” 6K", note: "External display" },
      { name: "Keychron Q3 Pro", note: "Mechanical keyboard" },
      { name: "Logitech MX Master 3S", note: "Pointer" },
      { name: "Sony WH-1000XM5", note: "Headphones" },
    ],
    dev: [
      { name: "macOS Sequoia", note: "Primary OS" },
      { name: "Cursor", note: "Code editor" },
      { name: "Ghostty", note: "Terminal" },
      { name: "OrbStack", note: "Containers" },
      { name: "TablePlus", note: "Database GUI" },
    ],
    apps: [
      { name: "Raycast", note: "Launcher" },
      { name: "Arc", note: "Browser" },
      { name: "Linear", note: "Issue tracker" },
      { name: "Notion", note: "Knowledge base" },
      { name: "1Password", note: "Secrets" },
    ],
    ai: [
      { name: "Claude", note: "Pair programming" },
      { name: "ChatGPT", note: "Research" },
      { name: "Cursor", note: "Inline edits" },
      { name: "Perplexity", note: "Search" },
    ],
    productivity: [
      { name: "Things 3", note: "GTD tasks" },
      { name: "Cron", note: "Calendar" },
      { name: "Bear", note: "Quick notes" },
    ],
  },
  resume: {
    summary:
      "10 years building backend platforms, design systems, and developer tools for early-stage startups and a handful of public companies.",
    experience: [
      {
        role: "Founding Engineer",
        company: "Nimbus Cloud",
        period: "2024 — Present",
        bullets: [
          "Designed multi-region control plane on Kubernetes",
          "Shipped v1 self-host CLI used by 1,200+ teams in private beta",
          "Built billing, auth, and observability from scratch",
        ],
      },
      {
        role: "Senior Engineer",
        company: "Northwind Labs",
        period: "2021 — 2024",
        bullets: [
          "Led migration of monolith to event-driven services",
          "Cut p95 latency by 58% via caching and read replicas",
          "Mentored a team of 8 engineers across two timezones",
        ],
      },
      {
        role: "Software Engineer",
        company: "Bright Pixel",
        period: "2017 — 2021",
        bullets: [
          "Owned billing + subscriptions for a $4M ARR SaaS",
          "Built the CI/CD pipeline on GitHub Actions + AWS",
        ],
      },
    ],
    education: [
      { school: "Technical University of Lisbon", degree: "B.Sc. Computer Science", period: "2012 — 2016" },
    ],
    certifications: [
      { name: "AWS Solutions Architect — Associate", year: 2023 },
      { name: "Certified Kubernetes Application Developer", year: 2024 },
    ],
    achievements: [
      "Open-sourced Nimbus CLI — 2.8k GitHub stars",
      "Speaker at React Summit 2024",
      "Top 1% contributor to a popular dev tool, 2023",
    ],
    skills: {
      Languages: ["TypeScript", "Rust", "Go", "Python"],
      Frontend: ["React", "Next.js", "Astro", "Tailwind"],
      Backend: ["Node.js", "PostgreSQL", "Redis", "tRPC"],
      Infra: ["Docker", "Kubernetes", "AWS", "Terraform"],
    },
  },
  testimonial: {
    quote:
      "Alex ships infrastructure that disappears into the background — which is the highest compliment you can pay a senior engineer.",
    author: "Sara Nakamura",
    role: "CTO, Northwind Labs",
  },
};

export const nav = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/works", label: "Works", icon: "grid" },
  { href: "/posts", label: "Posts", icon: "pen" },
  { href: "/resume", label: "Resume", icon: "file" },
  { href: "/uses", label: "Uses", icon: "chip" },
  { href: "/contact", label: "Contact", icon: "mail" },
];
