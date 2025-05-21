import { ExternalLink, Github, Laptop } from "lucide-react";
import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";

const projects = [
  {
    title: "Kazi Hub",
    description: "KaziHub uses advanced AI to find perfect job matches, optimize your resume, and automate applications so you can focus on landing interviews.",
    imageLight: "/projects/kazihub.png",
    imageDark: "/projects/kazihub-dark.png",
    liveLink: "https://kazihub.vercel.app",
    github: "https://github.com/petroghati/jobconnector",
    technologies: ["FastAPI", "TensorFlow","React", "TypeScript", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Project Management App",
    description: "A collaborative tool designed for teams to efficiently manage projects, tasks, deadlines, asset tracking, inventory control, financial oversight, and time tracking.",
    imageLight: "/projects/novaerp.png",
    imageDark: "/projects/novaerp-dark.png",
    liveLink: "https://novaerp.vercel.app",
    github: "https://github.com/petro-joseph/project-management-system",
    technologies: ["React", "Express", "PostgreSQL", "Docker", "NGINX", "Redis","Grafana"],
  },
  {
    title: "Bulk SMS System",
    description: "Enterprise messaging platform for sending bulk SMS with scheduling, templates and analytics.",
    imageLight: "/projects/bulk-sms-light.png",
    imageDark: "/projects/bulk-sms-dark.png",
    liveLink: "https://sms.example.com",
    github: "https://github.com/petroghati/bulk-sms",
    technologies: ["TypeScript", "NestJS", "MySQL", "RabbitMQ", "Docker"],
  },
  {
    title: "AI Data Analysis App",
    description: "AI-powered data analysis tool for extracting insights from large datasets with visualization capabilities.",
    imageLight: "/projects/ai-data-light.png",
    imageDark: "/projects/ai-data-dark.png",
    liveLink: "https://aidata.example.com",
    github: "https://github.com/petroghati/ai-data-analysis",
    technologies: ["Python", "FastAPI", "TensorFlow", "PostgreSQL", "React"],
  },
];

export default function Projects() {
  const [imageLoadErrors, setImageLoadErrors] = useState<{ [key: string]: boolean }>({});
  const { theme } = useTheme(); // Get the current theme from ThemeProvider

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const imageSrc = theme === "dark" ? project.imageDark : project.imageLight;

            return (
              <div
                key={project.title}
                className="project-card animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary/40 mb-5 flex items-center justify-center">
                  {!imageLoadErrors[project.title] ? (
                    <img
                      src={imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={() =>
                        setImageLoadErrors((prev) => ({
                          ...prev,
                          [project.title]: true,
                        }))
                      }
                    />
                  ) : (
                    <Laptop className="h-12 w-12 text-primary/70" />
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-xs rounded-full text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}