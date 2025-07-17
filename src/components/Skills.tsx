import {
  BrainCircuit, // AI
  Server,       // Backend
  Network,      // Architecture
  Layout,       // Frontend
  Cloud,        // DevOps
  Database,     // Databases
  Code,         // Languages
  TerminalSquare, // Tools
} from "lucide-react";

// --- EXPANDED to eight granular categories for a 4x2 grid ---
const skillsCategories = [
  {
    name: "AI & Automation",
    icon: BrainCircuit,
    skills: ["LangChain", "RAG", "LLMs", "Vector DBs", "n8n", "Crew AI"]
  },
  {
    name: "Backend Development",
    icon: Server,
    skills: ["Node.js", "NestJS", "FastAPI", "Laravel", "Express.js"]
  },
  {
    name: "System Architecture",
    icon: Network,
    skills: ["Microservices", "REST & GraphQL", "System Design", "Message Queues"]
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
  },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    skills: ["AWS", "Docker", "CI/CD", "Terraform", "GitHub Actions"]
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["PostgreSQL (pgvector)", "MongoDB", "MySQL", "Redis"]
  },
  {
    name: "Programming Languages",
    icon: Code,
    skills: ["Python","Java", "TypeScript", "JavaScript", "PHP", "SQL"]
  },
  {
    name: "Developer Tools",
    icon: TerminalSquare,
    skills: ["Git", "Linux", "Bash", "Postman", "Swagger", "Jira"]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>

        {/* --- UPDATED GRID for a 4x2 layout on large screens --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="skill-card animate-fade-in p-6"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="skill-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

