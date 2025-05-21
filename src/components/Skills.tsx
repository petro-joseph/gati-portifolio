
import { Database, Server, Code, Cloud, Settings, Layout } from "lucide-react";

const skillsCategories = [
  {
    name: "Backend",
    icon: Server,
    skills: ["Node.js", "NestJS", "Express", "TypeScript", "JavaScript", "Python", "PHP"]
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"]
  },
  {
    name: "DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD", "Jenkins", "GitHub Actions"]
  },
  {
    name: "Architecture",
    icon: Settings,
    skills: ["Microservices", "RESTful APIs", "GraphQL", "System Design", "Message Queues"]
  },
  {
    name: "Tools",
    icon: Code,
    skills: ["Git", "Jira", "Linux", "Bash", "Postman", "Swagger", "VS Code"]
  },
  {
    name: "Frontend",
    icon: Layout,
    skills: ["HTML/CSS", "React", "Vue.js", "Bootstrap", "Tailwind CSS"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Skills & Tools</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.name} 
                className="skill-card animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                
                <div className="w-full flex flex-wrap gap-2 justify-center">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 text-sm rounded-full bg-background text-foreground/80"
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
